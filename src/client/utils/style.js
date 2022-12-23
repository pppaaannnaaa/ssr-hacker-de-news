export const upvote = (isLoading) => {
  return {
    padding: '0',
    fontSize: 0,
    width: '60px',
    height: '60px',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.05)',
    cursor: isLoading ? 'none' : 'pointer',
    overflow: 'hidden',
  };
};

export const tableLoader = {
  width: '50px',
  height: '50px',
  margin: 'auto',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
};

export const loaderOverlay = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: '9',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 1)',
};
