import React  from 'react';
import { Wrapper, HeaderWrapper } from "./Transactions";
import {Box, DashboardTable} from "../../components";
import {BoxData} from "../../data/boxData";

function TransactionsPage() {
	return (
		<Wrapper>
			<HeaderWrapper>
				{BoxData.map((item) => (
					<Box
						key={item.id}
						header={item.header}
						price={item.price}
						icon={item.icon}
					/>
				))}
			</HeaderWrapper>
			<DashboardTable />
		</Wrapper>
	)
}

export default TransactionsPage;
