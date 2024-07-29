import fs from 'node:fs';
import path from 'node:path';

const buildFeedbackPath = () => path.join(process.cwd(), 'data', 'feedback.json');
const extractFeedback = () => {
    const fileData = fs.readFileSync(buildFeedbackPath());

    return JSON.parse(fileData);
};

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, text } = req.body;

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text,
        };

        const data = extractFeedback();
        data.push(newFeedback);

        fs.writeFileSync(buildFeedbackPath(), JSON.stringify(data));

        res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } else {
        const data = extractFeedback();

        res.status(200).json({ feedback: data });
    }
}

export { buildFeedbackPath, extractFeedback };
