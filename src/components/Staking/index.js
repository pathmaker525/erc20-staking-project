import FadeIn from "react-fade-in/lib/FadeIn"

import WalletButton from "components/WalletButton"

import "./style.scss"

const Staking = ({ account, txStatus, lockDate, onChangeLockDate }) => {
  return (
    <div className="staking flex">
      <FadeIn className="staking-wrapper container flex flex-column">
        <h1>SaFuTrendz Staking</h1>
        <div className="staking-main grid">
          <div className="staking-main-sumup grid rounded-sm blur-bg shadowed">
            <div className="flex flex-column">
              <h3>$SAFU Staked</h3>
              <span>1,000,000,000,000.000 SAFU</span>
            </div>
            <div className="flex flex-column">
              <h3>$SAFU Staker</h3>
              <span>20,000</span>
            </div>
          </div>

          <div className="staking-main-history grid rounded-sm blur-bg shadowed">
            <div className="rounded-sm blur-bg shadowed">
              <span>BUSD Earned</span>
              <p>0.000000000000</p>
            </div>
            <div className="rounded-sm blur-bg shadowed">
              <span>Your $SAFU Balance</span>
              <p>0.000000000000</p>
            </div>
            <div className="rounded-sm blur-bg shadowed">
              <span>Claimed reward</span>
              <p>0.000000000000</p>
              <span>Current Staked</span>
              <p>0.000000000000</p>
            </div>
            <div className="rounded-sm blur-bg shadowed">
              <span>Total Staked</span>
              <p>0.000000000000</p>
              <span>Total UnStaked</span>
              <p>0.000000000000</p>
            </div>
          </div>

          <div className="staking-main-staker flex flex-column rounded-sm blur-bg shadowed">
            <h2>$SAFU Calculator</h2>
            <p>Stake $SAFU to earn BUSD rewards + upto 120% APY.</p>
            <div className="staking-main-staker-amount grid rounded-sm blur-bg shadowed">
              <span>$SAFU</span>
              <div className="rounded-xs flex">
                <input type="number" placeholder="5000" />
                <button>max</button>
              </div>
            </div>
            <div className="staking-main-staker-lockdate flex flex-column rounded-sm blur-bg shadowed">
              <p>Lock $Safu for</p>
              <div className="grid">
                <button
                  className={`rounded-xs${
                    lockDate === 30 ? " lockdate-active" : ""
                  }`}
                  onClick={(e) => onChangeLockDate(e)}
                  name={30}
                >
                  Flexible
                </button>
                <button
                  className={`rounded-xs${
                    lockDate === 60 ? " lockdate-active" : ""
                  }`}
                  onClick={(e) => onChangeLockDate(e)}
                  name={60}
                >
                  30 days
                </button>
                <button
                  className={`rounded-xs${
                    lockDate === 90 ? " lockdate-active" : ""
                  }`}
                  onClick={(e) => onChangeLockDate(e)}
                  name={90}
                >
                  60 days
                </button>
                <button
                  className={`rounded-xs${
                    lockDate === 180 ? " lockdate-active" : ""
                  }`}
                  onClick={(e) => onChangeLockDate(e)}
                  name={180}
                >
                  90 days
                </button>
              </div>
            </div>
            <div className="staking-main-staker-info flex flex-column">
              <p>
                Up to <strong>{45}%</strong> Returns on 180 Days
              </p>
              <p>Lock until 23/09/2022 3:06 PM</p>
            </div>
            {account === undefined || account === "" ? (
              <WalletButton className="rounded-sm">Connect</WalletButton>
            ) : (
              <button className="rounded-sm">Stake</button>
            )}
            <button className="rounded-sm">UnStake</button>
            <button className="rounded-sm">Claim BUSD</button>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export default Staking
