import { useState } from "react"
import { useWeb3React } from "@web3-react/core"
import { useAlert } from "react-alert"

import StakingComponent from "components/Staking"

const Staking = () => {
  const alert = useAlert()

  const [txStatus, setTxStatus] = useState(false)

  const { account, library } = useWeb3React()

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

  return <StakingComponent />
}

export default Staking
