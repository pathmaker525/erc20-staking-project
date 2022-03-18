import { useState } from "react"
import { useWeb3React } from "@web3-react/core"
import { useAlert } from "react-alert"

import StakingComponent from "components/Staking"

const Staking = () => {
  const alert = useAlert()

  const [txStatus, setTxStatus] = useState(false)

  const [lockDate, setLockDate] = useState(30)

  const { account, library } = useWeb3React()

  const onChangeLockDate = (e) => {
    const date = e.target.name

    console.log(typeof date, date, typeof parseInt(date))

    setLockDate(parseInt(date))
  }

  const alertInfo = (message) =>
    alert.info(message, {
      onOpen: () => {
        setTxStatus("Pending")
      },
    })

  const alertSuccess = (message) =>
    alert.success(message, {
      onOpen: () => {
        setTxStatus("Success")
      },
    })

  const alertError = (message) =>
    alert.error(message, {
      onOpen: () => {
        setTxStatus("Error")
      },
    })

  return (
    <StakingComponent
      account={account}
      txStatus={txStatus}
      lockDate={lockDate}
      onChangeLockDate={onChangeLockDate}
    />
  )
}

export default Staking
