import { toast } from 'react-hot-toast';

const popup = (type: 'info' | 'error' | 'success', message: string) => {
  const dynamicStyle = {
    background: {
      success: '#4caf50',
      error: '#f44336',
      info: '#ccc3ff',
    }[type],
    color: '#fff',
    maxWidth: '90%',
    margin: 'auto',
  };

  toast(message, {
    style: dynamicStyle,
    icon: {
      success: '✅',
      error: '❌',
      info: 'ℹ️',
    }[type],
  });
};

export default popup;
