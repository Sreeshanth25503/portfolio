// researchData.js
// Central data store for all research publications.
// To add a new paper, append a new object to the `researchPapers` array.

export const researchPapers = [
  {
    id: 'exodus-bilstm-texmoji',
    slug: '/research/exodus-bilstm-texmoji',
    title: 'Exodus Bi-Directional LSTM Based Multivariate Texmoji Classification',
    shortTitle: 'Exodus Bi-LSTM Texmoji',
    year: 2023,
    conference: '2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)',
    conferenceShort: 'IEEE CCEM 2023',
    doi: '10.1109/CCEM60455.2023.00017',
    ieeeLink: 'https://ieeexplore.ieee.org/document/10706554',
    presentationLink:
      'https://docs.google.com/presentation/d/1jRgHgviGSLxoXnXhmjO-qSLrXpg8FWEc/edit?usp=sharing&ouid=100205924175106885595&rtpof=true&sd=true',
    status: 'Published',
    shortDescription:
      'A transformer-enhanced Bi-LSTM framework for multi-label emotion prediction from social media text and emojis.',
    abstract:
      'Stories that contain text and emojis manifest human emotions in a broad way. Emojis mixed with regular words on social media have transformed digital communication. This work focuses on collecting text combined with emojis and predicting eight basic human emotions: anger, fear, sadness, disgust, surprise, anticipation, trust, and joy. The collected instances are summarized using transformer-based summarization techniques. Emotional intensity is calculated and multi-label classification is performed using a Bi-Directional LSTM network. The emotions are then ranked based on predicted emotional intensity.',
    techStack: ['Bi-Directional LSTM', 'T5 Transformer', 'TensorFlow', 'Keras', 'Python', 'Hugging Face'],
    authors: [
      { name: 'Sreekumar N R', role: 'equal-first' },
      { name: 'Charles Jeyaseelan', role: 'equal-first' },
      { name: 'Sreeshanth Parapurathe', role: 'equal-first', isMe: true },
      { name: 'Gautham Arayalpuram', role: 'equal-first' },
      { name: 'Anushob K Anand', role: 'equal-first' },
      { name: 'Narendran Sobanapuram Muruganandam', role: 'co-author' },
    ],
    myRole: 'Equal-Contribution First Author',
    myContributions: [
      'Data Collection',
      'Experimental Evaluation',
      'Literature Review',
      'Manuscript Writing',
    ],
    dataset: 'Custom Texmoji Dataset (Social Media Text + Emojis)',
    algorithms: [
      'Bi-Directional LSTM',
      'Multi-Label Emotion Classification',
      'T5 Transformer Summarization',
    ],
    frameworks: ['TensorFlow', 'Keras', 'Hugging Face Transformers'],
    language: 'Python',
    libraries: ['TensorFlow', 'Keras', 'Transformers', 'NumPy', 'Pandas', 'Scikit-learn'],
    metrics: [
      { name: 'MAE', value: 'Used for Emotion Intensity Evaluation' },
      { name: 'MAPE', value: 'Used for Prediction Accuracy Assessment' },
      { name: 'RMSE', value: 'Used for Model Error Analysis' },
    ],
    recognition: ['IEEE Published', 'Presented at IEEE CCEM 2023'],
    seo: {
      title: 'Exodus Bi-LSTM Texmoji Classification | IEEE Research | Sreeshanth P',
      description:
        'IEEE published research on transformer-enhanced Bi-Directional LSTM for multi-label emotion prediction from social media text and emojis. Presented at IEEE CCEM 2023.',
      keywords:
        'Bi-LSTM, emotion classification, NLP, transformer, emojis, multi-label classification, IEEE, CCEM 2023, Sreeshanth',
    },
  },
  {
    id: 'echomae-asnet',
    slug: '/research/echomae-asnet',
    title: 'EchoMAE-ASNet: Dual-Track Transformer With Anatomical Cross-Validation for EF Assessment',
    shortTitle: 'EchoMAE-ASNet',
    year: 2026,
    conference:
      '2026 International Conference on Recent Advancement in Electrical, Computer and Communication Technologies (IECCT)',
    conferenceShort: 'IEEE IECCT 2026',
    doi: '10.1109/IECCT68664.2026.11541610',
    ieeeLink: 'https://ieeexplore.ieee.org/abstract/document/11541610',
    presentationLink:
      'https://docs.google.com/presentation/d/1a2tELkqgwvjvOD8DxIuMFJJP4VHmBztf/edit?usp=sharing&ouid=100205924175106885595&rtpof=true&sd=true',
    status: 'Published',
    shortDescription:
      'An explainable dual-track transformer architecture for automated cardiac ejection fraction assessment using echocardiography videos.',
    abstract:
      'Cardiovascular disorders are a major cause of mortality worldwide. Accurate and reproducible estimation of ejection fraction (EF) is critical for clinical diagnosis. EchoMAE-ASNet combines VideoMAE temporal prediction with Swin-UNet anatomical segmentation and validates results through cross-track agreement. Explainability modules provide visual evidence and structured reporting. Using EchoNet-Dynamic, the model achieved strong EF estimation accuracy and segmentation performance, supporting interpretable and clinically aligned cardiomyopathy assessment.',
    techStack: ['VideoMAE', 'Swin-UNet', 'PyTorch', 'Python', 'OpenCV', 'Scikit-learn'],
    authors: [
      { name: 'Sanjay Santhosh', role: 'equal-first' },
      { name: 'Sreeshanth Parapurathe', role: 'equal-first', isMe: true },
      { name: 'Abhijith K Das', role: 'equal-first' },
      { name: 'Manikandaprabhu P', role: 'co-author' },
    ],
    myRole: 'Equal-Contribution First Author',
    myContributions: [
      'Data Collection',
      'Model Development',
      'Feature Engineering',
      'Training',
      'Evaluation',
      'Literature Review',
      'Manuscript Writing',
    ],
    dataset: 'EchoNet-Dynamic Dataset',
    algorithms: ['VideoMAE', 'Swin-UNet', 'Temporal Fusion Module (TFM)', 'EchoMAE-ASNet'],
    frameworks: ['PyTorch'],
    language: 'Python',
    libraries: ['PyTorch', 'NumPy', 'Pandas', 'OpenCV', 'Scikit-learn'],
    metrics: [
      { name: 'MAE', value: '4.50%' },
      { name: 'RMSE', value: '4.27%' },
      { name: 'Dice Score', value: '89%' },
      { name: 'IoU', value: '0.82' },
      { name: 'Macro F1 Score', value: '0.367' },
    ],
    recognition: ['IEEE Published', 'Presented at IEEE IECCT 2026'],
    seo: {
      title: 'EchoMAE-ASNet: Cardiac EF Assessment | IEEE Research | Sreeshanth P',
      description:
        'IEEE published research on an explainable dual-track transformer for automated cardiac ejection fraction assessment using echocardiography. Presented at IEEE IECCT 2026.',
      keywords:
        'EchoMAE-ASNet, VideoMAE, Swin-UNet, ejection fraction, cardiac AI, medical imaging, IEEE, IECCT 2026, Sreeshanth',
    },
  },
];

export default researchPapers;
