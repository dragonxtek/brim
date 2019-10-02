/* @flow */
import type {ModalName} from "../../modal/types"

export type ModalButton = {label: string, click: Function}

export type ModalBoxProps = {
  children: *,
  title: string,
  name: ModalName,
  className?: string,
  buttons: string | ModalButton[]
}

export type ModalContentsProps = {
  ...ModalBoxProps,
  willUnmount: boolean,
  duration: number,
  rest?: *
}
