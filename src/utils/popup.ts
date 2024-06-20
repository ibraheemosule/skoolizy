import { toast } from 'react-hot-toast';

const popup = (type: 'info' | 'error' | 'success', message: string) => {
  toast(message, {
    style: {
      background: {
        success: '#4caf50',
        error: '#900404c2',
        info: '#ccc3ff',
      }[type],
      color: '#fff',
      maxWidth: '80vw',
      margin: 'auto',
    },
  });
};

export default popup;
