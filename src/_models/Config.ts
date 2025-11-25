import { BusOption } from './BusOption'
import { CloudDestination } from './CloudDestination'
import { ConfigSecuritySection } from './ConfigSecuritySection'
import { User } from './User'
import { Device } from './Device'
import { DeviceAction } from './DeviceAction'
import { DeviceSource } from './DeviceSource'
import { Source } from './Source'

export interface Config {
	externalAddress: string
	uuid: string
	security: ConfigSecuritySection
	users: User[]
	sources: Source[]
	devices: Device[]
	device_sources: DeviceSource[]
	device_actions: DeviceAction[]
	cloud_destinations: CloudDestination[]
	cloud_keys: string[]
	bus_options: BusOption[]
	remoteErrorReporting: boolean
}
