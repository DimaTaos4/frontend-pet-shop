import { BeatLoader } from "react-spinners"
import { useTheme } from "@emotion/react"
const Loader = ({ loading }) => {
    const { colors } = useTheme()
    return (
        <BeatLoader
            color={colors.textColorBlue}
            loading={loading}
            cssOverride={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}
            size={50}
            speedMultiplier={0.7}
        />
    )
}
export default Loader