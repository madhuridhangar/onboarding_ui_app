import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
      display: 'flex',
      height: '100%',
      justifyContent: 'center' ,
      alignItems: 'center',
      margin:'0',
      padding: '0',
      boxSizing: 'border-box',
      transition: 'all 0.3s',
      fontFamily: 'Roboto, sans-serif',
    },

    heading: {
        fontSize: '32px',
    fontWeight: '700',
    },

    steps: {
        position: 'relative',
        width: '360px',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto'
    },

    progressLine: {
        position: 'absolute',

        top: 'calc(50% - 1px)',
        left: '0%',

        height: '3px',
        width: '20%',

        backgroundColor: '#664de5',
        zIndex: '-1',
      }
  }));