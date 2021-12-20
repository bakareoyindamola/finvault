import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  border: 1px solid #E2EAF4;
	border-radius: 20px;
	overflow-x: auto;
`;

export const Table = styled.table`
  border-collapse: collapse;
	width: 100%;
  border-spacing: 0;
`;

export const TableHead = styled.thead``;

export const TableHeadData = styled.th`
	text-align: left;
  background: #F0F5FF;
	padding: 14px 32px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #718CAF;
	
	svg {
		margin-left: 6px;
	}
`;

export const TableBody = styled.tbody`
	tr:last-of-type  td{
    border-bottom: 0;
  }
`;

export const TableBodyData = styled.td`
  padding: 14px 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #07172F;
  border-bottom: 1px solid #E2EAF4;
	
	span {
		display: inline-block;
    border-radius: 106px;
		padding: 6px 12px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
		text-transform: capitalize;
		
		&.received {
      background: rgba(27, 243, 164, 0.2);
      color: #17EC9D;
		}
		
		&.sent {
      background: rgba(255, 29, 56, 0.17);
      color: #FF1D38;
		}
	}
`;

export const TableRow = styled.tr``;


