import { useState, useEffect, useRef } from 'react'
import styles from './drop-down.module.scss'
import DownArrow from '../../../assets/img/icon/down-arrow.svg'
import { useClickAway } from '../../../hooks'

type DropDownItem = {
	label: string
	value: any
}

type DropDownProps = {
	items?: DropDownItem[]
	type?: string
	onChange?: (selectedItem: DropDownItem | null) => void
}

export const DropDown = ({ type = 'Appartment', items = [], onChange }: DropDownProps) => {
	const [selectedItem, setSelectedItem] = useState<DropDownItem>()
	const [dropped, setDropped] = useState(false)
	const dropdownRef = useRef(null)

	useEffect(() => {
		onChange?.(selectedItem ?? null)
	}, [selectedItem])

	useClickAway(dropdownRef, () => setDropped(false))

	return (
		<div className={styles.dropDownComponent} ref={dropdownRef}>
			<div className={styles.dropDownComponent_Header} onClick={() => setDropped(!dropped)}>
				<div className={styles.dropDownComponent_Header_Type}>
					{type}
				</div>
				<div className={styles.dropDownComponent_Header_Value}>
					{selectedItem?.label}
				</div>
				<div className={styles.dropDownComponent_Header_Icon}>
					<img src={DownArrow} alt="" />
				</div>
			</div>
			{
				dropped &&
				<div className={styles.dropDownComponent_List} >
					{
						items.map(_itm => (
							<div className={selectedItem?.value == _itm.value ? styles.dropDownComponent_List_Item_Selected : styles.dropDownComponent_List_Item} onClick={() => {
								setSelectedItem(_itm)
								setDropped(false)
							}}>
								{_itm.label}
							</div>
						))
					}
				</div>
			}
		</div>
	)
}