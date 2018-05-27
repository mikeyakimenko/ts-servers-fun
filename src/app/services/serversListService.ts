interface ServerModel {
    id: string
    serverName: string
    serverGroup: string
    rate: number
    uptime: string
}

interface ServersList {
    serversList: object
}

export class ServersListService implements ServersList {
    private data: any[]

    constructor (data: any) {
        this.data = data
    }

    static create(data) {
        return new ServersListService(data)
    }

    private calculateUptime = (date: any) => {
        let today: any = new Date()
        let bootday: any = new Date(date)
        return `${Math.round((today - bootday) / (1000*60*60*24))} days`
    }

    private createServer (serverObject): ServerModel {

        let server = {
            id: serverObject.id,
            serverName: serverObject.serverName,
            serverGroup: serverObject.serverGroup,
            rate: (serverObject.stabiltyRate * serverObject.powerRate) % this.data.length,
            uptime: this.calculateUptime(serverObject.bootDate)
        }
        return server
    }

    public serversList() {
        return this.data.map(server => this.createServer(server)).sort((a, b) => {
            return b.rate - a.rate
        })
    }
}
