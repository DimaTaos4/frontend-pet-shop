import { ThemeProvider } from "@emotion/react";
const theme = {
    colors: {
        textColorBlack: '#282828',
        fontColorBlack: '#282828',
        grey: '#8B8B8B',
        lightGrey: '#F1F3F4',
        fontColorBlue: '#0D50FF',
        textColorBlue: '#0D50FF',
    },
    borderRadius: '12px',
}

const Theme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
export default Theme