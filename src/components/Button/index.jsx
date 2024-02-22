import { RedButton, WhiteButton } from './styled.js'

function Button({ children, red, ...rest }) {
    return (
        <>
            {red ? (
            <RedButton {...rest}>{children}</RedButton>
            ) : (
            <WhiteButton {...rest}>{children}</WhiteButton>
            )}
        </>
    )
}

export default Button