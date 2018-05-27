import { getServersList } from "../fetchers/serversListFetcher"
import { ServersListPopup } from '../ui/serversList'
import { StatusPopup } from '../ui/statusPopup'
import { ServersListService } from '../services/serversListService'

export const ServersListAction = () => {
    getServersList().then(data => {
        let serversList = ServersListService.create(data).serversList()
        let popup = ServersListPopup.create('list popup', {serversList: serversList})
        let statusPopup = StatusPopup.create()

        popup.createElement()
        statusPopup.createElement()
    })
}
