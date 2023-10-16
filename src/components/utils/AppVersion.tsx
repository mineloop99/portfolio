import packageInfo from "../../../package.json";

export default function PopoverHover() {
  const { version } = packageInfo;
  return <div className="text-sm text-gray-600">Version: {version}</div>;
}
