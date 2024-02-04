import { RedButton, WhiteButton } from './styled.js'

function Button({ children, red }) {
    return (
        <>
            {red ? (
            <RedButton>{children}</RedButton>
            ) : (
            <WhiteButton>{children}</WhiteButton>
            )}
        </>
    )
}

export default Button