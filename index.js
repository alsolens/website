const express = require('express');
const { exec } = require('child_process');
const app = express();

app.use(express.json());

app.get('/webhook', (req, res) => {
        exec('cd /home/ubuntu/website && git pull origin main && npm install && npm run build && cd server && npm install && pm2 restart all', 
        (err, stdout, stderr) => {
            if (err) {
                console.error(`Error: ${stderr}`);
                return res.status(500).json({message:'Error executing command ',err:stderr,out:stdout});
            }
            console.log(`Output: ${stdout}`);
            res.status(200).send('Updated and restarted successfully ' + stdout);
        });
});

app.listen(3000, () => console.log('Webhook server running on port 3000'));
