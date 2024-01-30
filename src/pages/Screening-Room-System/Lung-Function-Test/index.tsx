import Container from '@mui/material/Container'
import ResponsiveAppBar from 'components/AppBar'
import ScreeningRoomCheckoutListTable from 'components/ScreeningRoom/CheckoutListTable'
import ScreeningRoomHeader from 'components/ScreeningRoom/Header'
import ScreeningRoomWaitingListTable from 'components/ScreeningRoom/WaitingListTable'
import { LUNG_FUNCTION_TEST_PAGE } from 'constant'
import { CheckoutListData } from 'types/ScreeningRoom/CheckoutListData'
import { WaitingListData } from 'types/ScreeningRoom/WaitingListData'

const LungFuntionTest = () => {
    const waitingListData: WaitingListData[] = [
        {
            id: 1,
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            checkInAt: '13:05',
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '002',
            name: 'Lok Wing Ching',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: '13:05',
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '003',
            name: 'Liu Yan',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
        {
            id: 2,
            seqNo: '004',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K1',
            checkInAt: undefined,
            waitingAt: '12:00',
        },
    ]

    const checkoutList: CheckoutListData[] = [
        {
            id: 90,
            seqNo: '009',
            name: 'Chen Yu Lin',
            age: 25,
            gender: 'Male',
            package: 'K1',
            checkInAt: '12:25',
            waitingAt: '12:30',
            checkOutAt: '13:40',
        },
        {
            id: 91,
            seqNo: '010',
            name: 'Wang Jin Pyng',
            age: 56,
            gender: 'Female',
            package: 'K3',
            checkInAt: '12:25',
            waitingAt: '12:40',
            checkOutAt: '13:00',
        },
    ]

    return (
        <>
            <ResponsiveAppBar />

            <ScreeningRoomHeader title="LUNG FUNCTION TEST" />

            <Container maxWidth="xl" style={{ marginTop: '1rem' }}>
                <div>
                    <ScreeningRoomWaitingListTable
                        data={waitingListData}
                        redirectBasePath={LUNG_FUNCTION_TEST_PAGE}
                    />
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <ScreeningRoomCheckoutListTable
                        data={checkoutList}
                        redirectBasePath={LUNG_FUNCTION_TEST_PAGE}
                    />
                </div>
            </Container>
        </>
    )
}

export default LungFuntionTest
