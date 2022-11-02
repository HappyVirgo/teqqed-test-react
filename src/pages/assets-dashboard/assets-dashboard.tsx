import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { SearchPanel } from "../../components/assets/search-panel/search-panel"
import AssetsList from '../../components/assets/list'
import { fetchAssetsRequest } from "../../store/actions/assets-action/assets-action"

import { DropDown } from "../../components"
import { DropDownItem } from "../../types"

import styles from './assets-dashboard.module.scss'

const sortItems: DropDownItem[] = [
	{
		label: 'Date added',
		value: 'date'
	},
	{
		label: 'Highest price',
		value: 'highest'
	},
	{
		label: 'Lowest price',
		value: 'lowest'
	},
]

const searchTypeItems: DropDownItem[] = [
	{
		label: 'Appartment',
		value: 'appartment'
	},
	{
		label: 'Villa',
		value: 'villa'
	},
	{
		label: 'Townhouse',
		value: 'townhouse'
	},
]

const AssetsDashboard = () => {
	const dispatch = useDispatch()
	const { pending, assets } = useSelector((state: any) => state.assets)

	const [searchText, setSearchText] = useState('')
	const [sortby, setSortby] = useState<DropDownItem>(sortItems[0])
	const [searchType, setSearchType] = useState<DropDownItem>(searchTypeItems[0])

	useEffect(() => {
		dispatch(fetchAssetsRequest({
			searchText: searchText,
			sortBy: sortby.value,
			type: searchType.value
		}))
	}, [searchText, searchType, sortby])


	return (
		<div className={styles.assetsPage}>
			<aside className={styles.filterPanel}>
				<DropDown
					type="Sort By"
					onChange={(item) => setSortby(item ?? sortItems[0])}
					items={sortItems}
				/>
				<DropDown
					type="Type"
					onChange={(item) => setSearchType(item ?? searchTypeItems[0])}
					items={searchTypeItems}
				/>
			</aside>
			<main className={styles.main}>
				<SearchPanel onSearch={(txt) => setSearchText(txt)} loading={pending} />
				<AssetsList assets={assets} loading={pending} />
			</main>
		</div>
	)
}

export default AssetsDashboard