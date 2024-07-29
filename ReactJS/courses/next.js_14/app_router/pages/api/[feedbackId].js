import { extractFeedback } from './feedback';

export default function handler(req, res) {
    const feedbackId = req.query.feedbackId;
    const data = extractFeedback();
    const feedback = data.find(({ id }) => id === feedbackId); 

    res.status(200).json({ feedback })
}
