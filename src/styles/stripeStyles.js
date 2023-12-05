const stripeAppearance = {
    theme: 'stripe',
    variables: {
      colorPrimary: '#902323', 
      colorBackground: '#f9f9f9', 
      colorText: '#333', 
      colorDanger: '#df1b41',
      borderRadius: '10px',
      iconHoverColor: '#ffd700',
      spacingUnit: '5px' 
    },
    rules: {
      '.Input': {
        backgroundColor: 'var(--colorBackground)',
        color: 'var(--colorText)',
      },
      '.Block': {
        backgroundColor: 'var(--colorBackground)',
      },
    },
  };
  
  export default stripeAppearance;

//   styling for the checkout stuff from stripe