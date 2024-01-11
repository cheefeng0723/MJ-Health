import ResponsiveAppBar from 'components/AppBar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from './_it-room-printing.module.scss'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import AddressStickerTable from './components/address-sticker/address-sticker-table'
import { Button, Stack } from '@mui/material'
import { useState } from 'react'
import CTScan from './components/ct-scan'
import FOBTList from './components/fobt-list'
import HealthManagementPromotion from './components/health-management-promotion'
import HealthScreeningReport from './components/health-screening-report'
import RegistrationList from './components/registration-list'
import MakeUpLaterList from './components/later-list'
import MicroPhysiologicalAssessment from './components/micro-physiological-assessment'
import OperatedTimeList from './components/operated-time-list'
import PapSmearExamReport from './components/pap-smear-exam-report'
import PostList from './components/post-list'
import HMCRecord from './components/hmc-record'

const ITRoomPrintingPage = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const [currentSection, setCurrentSection] = useState<number>(1)

    const handleDisplayCurrentSection = (section: number) => {
        setCurrentSection(section)
    }

    const displayCurrentSection = (currentSection: number) => {
        switch (currentSection) {
            case 1:
                return <AddressStickerTable />
            case 2:
                return <CTScan />
            case 3:
                return <FOBTList />
            case 4:
                return <HealthManagementPromotion />
            case 5:
                return <HealthScreeningReport />
            case 6:
                return <RegistrationList />
            case 7:
                return <MakeUpLaterList />
            case 8:
                return <MicroPhysiologicalAssessment />
            case 9:
                return <OperatedTimeList />
            case 10:
                return <PapSmearExamReport />
            case 11:
                return <PostList />
            case 12:
                return <HMCRecord />
            default:
                return null
        }
    }
    return (
        <>
            <ResponsiveAppBar />
            <div
                className={styles.itRoomPrintingHeader}
                style={
                    lgUp ? { paddingLeft: '3rem', paddingRight: '3rem' } : {}
                }
            >
                {lgUp ? (
                    <>
                        <div className={styles.itRoomPrintingSearchDiv}>
                            <TextField
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon
                                                className={styles.searchIcon}
                                            />
                                        </InputAdornment>
                                    ),
                                }}
                                variant="outlined"
                                size="small"
                                margin="dense"
                                placeholder="Search..."
                                className={styles.itRoomPrintingSearchInput}
                            />
                        </div>
                        <div>
                            <p className={styles.itRoomPrintingHeaderTitle}>
                                IT ROOM PRINTING
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <p className={styles.itRoomPrintingHeaderTitle}>
                                IT ROOM PRINTING
                            </p>
                            <div style={{ textAlign: 'center' }}>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    placeholder="Search..."
                                    className={
                                        styles.itRoomPrintingSearchInputMobile
                                    }
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.itRoomPrintingMenuDiv}>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 1
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(1)}
                    >
                        Address Sticker
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 2
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(2)}
                    >
                        CT Scan Calcium Scoring List
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 3
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(3)}
                    >
                        FOBT List
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 4
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(4)}
                    >
                        Health Management Promotion Brochure
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 5
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(5)}
                    >
                        Health Screening Report
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 6
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(6)}
                    >
                        List of Registration
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 7
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(7)}
                    >
                        Make Up Later List
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 8
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(8)}
                    >
                        Micro Physiological Assessment
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 9
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(9)}
                    >
                        Operated Time List
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 10
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(10)}
                    >
                        Pap&apos;s Smear Exam Report
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 11
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(11)}
                    >
                        Post List
                    </Button>
                </div>

                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 12
                                ? styles.selectedITRoomPrintingMenu
                                : styles.unselectedITRoomPrintingMenu
                        }
                        onClick={() => handleDisplayCurrentSection(12)}
                    >
                        HMC Record
                    </Button>
                </div>
            </div>
            <div className={styles.itRoomPrintingBodyDiv}>
                {displayCurrentSection(currentSection)}
            </div>
        </>
    )
}

export default ITRoomPrintingPage
