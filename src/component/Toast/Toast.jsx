import toast from 'react-simple-toasts';

export function Toast(message) {
  toast(message, {
    clickClosable: true,
    render: (message) => (
      <div
        style={{
          background: 'rgba(29, 29, 31, 0.7)',
          borderRadius: '30px',
          boxShadow: '0 2px 2px 2px rgba(0, 0, 0, 0.1)',
          color: '#F9F9F9',
          padding: '15px',
          minWidth: '286px',
          height: '50px',
          fontFamily: 'Pretandard-Regular',
          fontSize: '14px',
          textAlign: 'center',
        }}
      >
        {message}
      </div>
    ),
  });
}

export default Toast;
