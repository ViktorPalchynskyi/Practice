import fs from 'node:fs';
import path from 'node:path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, text } = req.body;

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text,
        };

        const filepath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filepath);
        const data = JSON.parse(fileData);
        data.push(newFeedback);
       
        fs.writeFileSync(filepath, JSON.stringify(data));

        res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } else {
        res.status(200).json({ message: 'hello there' });
    }
}
