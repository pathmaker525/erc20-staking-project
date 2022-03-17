import FadeIn from "react-fade-in/lib/FadeIn"

import WalletButton from "components/WalletButton"

import "./style.scss"

const Staking = ({}) => {
  return (
    <div className="staking flex">
      <FadeIn className="staking-wrapper container flex flex-column">
        <h1>SaFuTrendz Staking</h1>
        <div className="staking-main grid"></div>
      </FadeIn>
    </div>
  )
}

export default Staking
