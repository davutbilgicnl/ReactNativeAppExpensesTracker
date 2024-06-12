interface IDeviceInfo {
  deviceId?: string;
  manufacturer?: string;
  model?: string;
  os?: string;
  osVersion?: string;
  screenResolution?: string;
  locale?: string;
  timezone?: string;
  isDarkModeEnabled?: boolean;
  isLocationServiceEnabled?: boolean;
}
export default IDeviceInfo;
