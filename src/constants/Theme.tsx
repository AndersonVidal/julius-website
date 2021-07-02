export const colors = {
    purple: {
        light: '#8278E2',
        normal: '#6456E2',
        strong: '#4B3EBD'
    },
    white: {
        normal: '#FAFAFA',
        strong: '#FFFFFF'
    },
    gray: {
        normal: '#777777',
        strong: '#444444'
    }
};

export const buttonStyle = {
    backgroundColor: colors.purple.normal,
    color: colors.white.normal,
    "&:hover": {
        backgroundColor: colors.purple.light,
        color: colors.white.strong
    },
    "&:active": {
        backgroundColor: colors.purple.strong,
        color: colors.white.strong
    }
};

export const textStyle = {
    fontSize:"sm",
    fontFamily:"sans-serif",
    color: colors.white.normal
};

export const h1Style = {
    fontStyle: 'sans-serif',
    fontWeight: '55px',
    fontSize: '50',
    color: colors.gray.strong
};

export const subTextStyle = {
    fontSize: '22',
    color: colors.gray.normal,
    fontWeight: '31.5px'
};

export const h2Style = {
    fontSize: '37',
    fontWeight: '44.4px',
    color: colors.gray.strong
};

