import React from 'react';
import { Wrapper, Table, TableHead, TableBody, TableBodyData, TableHeadData, TableRow } from './dashboardTable';
import {TableArrowSVG} from "../../assets";
import {TableData} from "../../data/tableData";

function DashboardTable() {
	return (
		<Wrapper>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadData>From <TableArrowSVG /></TableHeadData>
						<TableHeadData>To <TableArrowSVG /></TableHeadData>
						<TableHeadData>Currency <TableArrowSVG /></TableHeadData>
						<TableHeadData>100.00 <TableArrowSVG /></TableHeadData>
						<TableHeadData>Actions <TableArrowSVG /></TableHeadData>
					</TableRow>
				</TableHead>
				<TableBody>
					{TableData.map((item) => (
						<TableRow key={item.id}>
							<TableBodyData>{item.from}</TableBodyData>
							<TableBodyData>{item.to}</TableBodyData>
							<TableBodyData>{item.currency}</TableBodyData>
							<TableBodyData>{item.price}</TableBodyData>
							<TableBodyData>
								<span className={item.action}>{item.action}</span>
							</TableBodyData>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Wrapper>
	)
}

export default DashboardTable;
