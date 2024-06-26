export type KernelApiConfig = {
  port: number
  'socks-port': number
  'mixed-port': number
  'interface-name': string
  'allow-lan': false
  mode: string
  tun: {
    enable: boolean
    stack: string
    device: string
  }
}

export type Proxy = {
  alive: boolean
  all: string[]
  hidden: boolean
  icon: string
  name: string
  now: string
  type: string
  udp: boolean
  history: {
    delay: number
  }[]
}

export type KernelApiProxies = {
  proxies: Record<string, Proxy>
}

export type KernelApiProviders = {
  providers: Record<
    string,
    {
      name: string
      proxies: Proxy[]
    }
  >
}

export type KernelApiConnections = {
  connections: {
    id: string
    chains: string[]
  }[]
}

export type KernelConnectionsWS = {
  connections: {
    id: string
    metadata: {
      network: string
      type: string
      sourceIP: string
      destinationIP: string
      sourcePort: string
      destinationPort: string
      inboundIP: string
      inboundPort: string
      inboundName: string
      inboundUser: string
      host: string
      dnsMode: string
      process: string
      processPath: string
      specialProxy: string
      specialRules: string
      remoteDestination: string
      sniffHost: string
    }
    upload: number
    download: number
    start: string
    chains: string[]
    rule: string
    rulePayload: string
  }[]
}

export type KernelApiProvidersRules = {
  providers: Record<
    string,
    {
      behavior: string
      format: string
      name: string
      ruleCount: number
      type: string
      updatedAt: string
      vehicleType: string
    }
  >
}
