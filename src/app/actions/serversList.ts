import { getServersList } from "../fetchers/serversListFetcher"
import { ServersListPopup } from '../ui/serversList'
import { StatusPopup } from '../ui/statusPopup'
import { ServersListService } from '../services/serversListService'

export const ServersListAction = () => {
    getServersList().then(data => {
        let serversList = ServersListService.create(data).serversList()
        let statusPopup = StatusPopup.create()
        let popup = ServersListPopup.create('listPopup', {
            serversList: serversList,
            callbacks: {
                serverNameClick: statusPopup.showStatus
            }
        })

        statusPopup.createElement()
        popup.createElement()
    })
}
