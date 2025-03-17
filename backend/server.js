require("dotenv").config();
const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { errorMonitor } = require("nodemailer/lib/xoauth2");

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Database Connection
const db =mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Multer Configuration for Image Uploads
const storage = multer.diskStorage({
    destination: '../src/admin/assets/img/users/',
    filename: (req, file, cb) => {
        cb(null, req.body.name + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Change this based on your provider
    port: process.env.EMAIL_PORT, // 587 for TLS, 465 for SSL, or 25 for non-secure
    secure: process.env.SECURE_TOKEN,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.get('/api/status/:token', async(req, res) => {
    try{
        const { token } = req.params;
  
        // Decode Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        const userEmail = decoded.email;
        console.log(userEmail);
        const sql = `Select * from subscribers where email = '${userEmail}'`;
        db.query(sql, (err, result) => {
            if(err) {
                console.log(err);
            } else {

                res.status(200).json({status: 'success', data: result});
            }
        })
    } catch(err){
        console.log("Error in request api/status:", err);
        res.status(500).json({status: "failed", message: err});
    }
});

app.get("/api/activate/:token", async (req, res) => {
    try {
      const { token } = req.params;
  
      // Decode Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      const userEmail = decoded.email;
      console.log(userEmail);
  
    //   Update the subscriber table (set status = 1)
    const sql ="UPDATE subscribers SET status = 1 WHERE email = ?";
    db.query(sql, [userEmail], (err, result) => {
        if(err){
            console.log(err);
        } else {
            // res.send();
            res.send(`<h2>Email verified successfully! You can now <a href="http://localhost:5173/signin">Sign In</a>.</h2>`);
        }
    })
  
    } catch (error) {
      console.error("Activation error:", error);
      res.status(400).json({ message: "Invalid or expired activation link." });
    }
  });

app.get('/api/userdata/:token', async (req, res) => {
    try{

        const token = req.params.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        if (!decoded) {
            res.status(500).json({status: "failed", message: "You are Not Login, Please login First!"});
        }
        // console.log(decoded);


        const sql = `select  name, email, company_name, phone, country, city, address, user_image from subscribers where email = '${email}'`;
        new Promise ((resolve, reject) => {
            db.query(sql, (err, userData) => {
                if (err) {
                    reject(err);
                } else {
                    console.log(userData);
                    resolve(res.status(200).json({status: "success", userData: userData}));
                }
            });
        });
    } catch(err) {
        console.log("Error during /api/userdata", err);
        res.status(500).json({status: "failed", message: "Internal Server Error"});
    }
});

app.put('/api/updateuser/:token', async (req, res) => {
    try{
        const token = req.params.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
        if (!email) {
            console.log("vwevsdvs");
          return res.status(500).json({status: "failed", message: "Invalid Mail!"});    
        }
        console.log(req.body);
        const {name, company_name, phone, country, city, address} = req.body;
        const sql = `update subscribers set name = '${name}', company_name = '${company_name}', phone = '${phone}', country = '${country}', city = '${city}', address = '${address}' where email = '${email}'`;
        new Promise ((resolve, reject) => {
            db.query(sql, (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(res.status(200).json({status: "success", message: "Data Update SuccessFully"}));
                }
            });
        });
    } catch (err) {
        console.log("Error During api/updateuser", err);
        res.status(500).json({status: "failed", message: err});
    }
})
  
// User Signup API
app.post('/api/signup', upload.single('userImage'), async (req, res) => {
    try {
        console.log(req.body);
        const { name, companyName, email, phoneNumber, password } = req.body;
        const userImage = req.file ? req.file.filename : '';


        // Hash the password
        console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        // Check if email already exists
        const checkEmailQuery = 'SELECT email FROM subscribers WHERE email = ?';
        db.query(checkEmailQuery, [email], (err, existingUser) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Database error while checking email', error: err });
            }

            if (existingUser.length > 0) {
                return res.status(400).json({ message: 'Email already exists. Please try with another email.' });
            }

            // Insert the new user
            const insertQuery = 'INSERT INTO subscribers (name, company_name, email, phone, password, user_image) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(insertQuery, [name, companyName, email, phoneNumber, hashedPassword, userImage], (insertErr, result) => {
                if (insertErr) {
                    console.log(insertErr);
                    return res.status(500).json({ message: 'Error inserting user into database', error: insertErr });
                }

                // Generate JWT Token
                const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1h' });

                // Send Activation Email
                sendActivationEmail(token, email);

                res.status(201).json({ message: 'Signup successful. Please check your email to activate your account.', token });
            });
        });

    } catch (err) {
        console.log("Error on /api/signup", err);
        res.status(500).json({ message: 'Internal server error', error: err });
    }
});


// Send Activation Email
const sendActivationEmail = (token, email) => {
   

    const verificationLink = `http://localhost:5000/api/activate/${token}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Lyra Zone Solutions - Account Activation',
        html: `<h2>Click the link below to verify your account @ LyraZone:</h2>
             <p><a href="${verificationLink}" target="_blank">${verificationLink}</a></p>`,
        // text: `Click the link to activate your account: ${process.env.FRONTEND_URL}/activate?email=${email}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Activation email sent:', info.response);
        }
    });
};

// User Login API
app.post('/api/signin', (req, res) => {
    const { email, password, rememberMe } = req.body;
    const sql = 'SELECT * FROM subscribers WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({ message: "Invalid email or account doen't exist."});
        }
        // console.log(results);
        const user = results[0];
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect Password' });
        }
        const expiresIn = rememberMe ? "7d" : "3h";
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn  });
        res.json({ token, user });
    });
});

// Forgot Password
app.post('/api/forgot-password', (req, res) => {
    const { email } = req.body;
  
    // Check if email exists
    const checkEmailQuery = "SELECT * FROM subscribers WHERE email = ?";
    db.query(checkEmailQuery, [email], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err });
      }
      if (results.length === 0) {
        return res.status(400).json({ message: "Email not found!" });
      }
  
      // Generate Reset Token (valid for 15 minutes)
      const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "15m" });
  
      // Send Reset Email
      const resetLink = `http://localhost:5173/reset-password/${token}`;
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "LyraZone Subscription - Password Reset Request",
        html: `<p>Click the link below to reset your password @ LyraZone:</p>
               <a href="${resetLink}">${resetLink}</a>
               <p>This link will expire in 15 minutes.</p>`,
      });
  
      res.json({ message: "Password reset email sent. Please check your inbox." });
    });
  });

  
  
app.post("/api/reset-password/:token", async (req, res) => {
      const { token } = req.params;
      const { newPassword } = req.body;
    
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email;
    
        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
    
        // Update password in database
        const updateQuery = "UPDATE subscribers SET password = ? WHERE email = ?";
        db.query(updateQuery, [hashedPassword, email], (err, results) => {
          if (err) {
            return res.status(500).json({ message: "Database error", error: err });
          }
          res.json({ message: "Password reset successful. You can now log in." });
        });
    
      } catch (error) {
        res.status(400).json({ message: "Invalid or expired token." });
      }
    });

// Fetch Products API
app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.json(results);
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
