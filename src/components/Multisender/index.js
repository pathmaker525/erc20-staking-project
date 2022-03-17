import { useEffect, useRef } from "react"
import { BigNumber, constants } from "ethers"
import { useCodeMirror } from "@uiw/react-codemirror"
import FadeIn from "react-fade-in/lib/FadeIn"
import { IoSearchOutline, IoSyncOutline } from "react-icons/io5"

import WalletButton from "components/WalletButton"

import "./style.scss"

const MultiSender = ({
  txStatus,
  account,
  symbol,
  decimals,
  balance,
  allowance,
  multisendDataValidated,
  fetchingTokenInfo,
  reArrangeMultiSendList,
  onChangeTokenAddress,
  onChangeCodeMirrorHandler,
  onApproveToken,
  onCallMultiSendTransaction,
}) => {
  const editor = useRef()
  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions: [],
    value: "",
    theme: "dark",
    width: "100%",
    height: "320px",
    onChange: (value) => {
      onChangeCodeMirrorHandler(value)
    },
  })

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current)
    }
  }, [editor.current])

  return (
    <div className="multisender flex">
      <FadeIn className="multisender-wrapper container flex flex-column">
        <h1>SaFuTrendz MultiSender</h1>
        <div className="multisender-main grid">
          <div className="multisender-main-settings grid">
            <span>{symbol !== undefined && `Token: ${symbol}`}</span>
            <span>
              {balance !== undefined &&
                `Balance: ${BigNumber.from(balance).toString()}`}
            </span>
            <div className="multisender-main-settings-input flex">
              {fetchingTokenInfo === true ? (
                <IoSyncOutline className="spining" />
              ) : (
                <IoSearchOutline />
              )}
              <input
                type="text"
                className="rounded-sm shadowed"
                placeholder="Address of token to send"
                onChange={(e) => onChangeTokenAddress(e)}
              />
            </div>
          </div>
          <div className="multisender-main-editor grid">
            <span>List of Addresses</span>
            {/* <span>Show Sample CSV</span> */}
            <div
              className="multisender-main-editor-main flex rounded-sm shadowed"
              ref={editor}
            />
            {/* <input type="file" name="upload csv" /> */}
          </div>
          <div className="multisender-main-send flex">
            {account === undefined || account === "" ? (
              <WalletButton>Connect Wallet</WalletButton>
            ) : (
              <button
                onClick={
                  txStatus === "pending"
                    ? () => {}
                    : decimals >= 0 && fetchingTokenInfo === false
                    ? multisendDataValidated === false
                      ? reArrangeMultiSendList
                      : BigNumber.from(allowance).toString() ===
                        BigNumber.from(constants.MaxUint256).toString()
                      ? onCallMultiSendTransaction
                      : onApproveToken
                    : () => {}
                }
              >
                {decimals >= 0 && fetchingTokenInfo === false
                  ? multisendDataValidated === false
                    ? "Next"
                    : BigNumber.from(allowance).toString() ===
                      BigNumber.from(constants.MaxUint256).toString()
                    ? "Send Tokens"
                    : "Approve Token"
                  : "Checking..."}
              </button>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

export default MultiSender
