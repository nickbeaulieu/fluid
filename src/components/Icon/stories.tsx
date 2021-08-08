import { Meta, Story } from '@storybook/react';
import React, { FC } from 'react';
import { Icon, IconProps } from '.';
import { useInput } from '../../hooks/useInput';
import { Button } from '../Button';
import { FocusCheck } from '../FocusCheck';
import { Input } from '../Input';

export default {
    title: 'Core/Icon',
    component: Icon,
} as Meta;

const StoryTemplate: Story<IconProps> = (args) => {
    const [value, onChange] = useInput('');
    return (
        <div className="space-y-4">
            <FocusCheck />
            <div className="flex text-indigo-700 space-x-2 items-center">
                <Icon {...args} type="stroke" />
                <Icon {...args} type="fill" />
            </div>
            <div className="flex text-indigo-400 space-x-2 items-center">
                <Icon {...args} type="stroke" />
                <Icon {...args} type="fill" />
            </div>
            {/* should be able to pass in icon as a string to the button, input, etc */}
            {/* also should be able to pass arbitrary props to the underlying svg element */}
            <Button label="Click here" icon={<Icon {...args} />} />
            <Button label="Click here" intent="secondary" icon={<Icon {...args} />} />
            <Input value={value} onChange={onChange} rightIcon={<Icon {...args} />} />
        </div>
    );
};

export const AllIcons: FC = () => {
    return (
        <div className="flex flex-wrap text-gray-700 space-x-4 space-y-4">
            <div className="ml-4 mt-4">
                <Icon size={40} icon="academic-cap" />
            </div>
            <Icon size={40} icon="adjustments" />
            <Icon size={40} icon="annotation" />
            <Icon size={40} icon="archive" />
            <Icon size={40} icon="arrow-circle-down" />
            <Icon size={40} icon="arrow-circle-left" />
            <Icon size={40} icon="arrow-circle-right" />
            <Icon size={40} icon="arrow-circle-up" />
            <Icon size={40} icon="arrow-down" />
            <Icon size={40} icon="arrow-left" />
            <Icon size={40} icon="arrow-right" />
            <Icon size={40} icon="arrow-up" />
            <Icon size={40} icon="arrow-narrow-down" />
            <Icon size={40} icon="arrow-narrow-left" />
            <Icon size={40} icon="arrow-narrow-right" />
            <Icon size={40} icon="arrow-narrow-up" />
            <Icon size={40} icon="arrow-sm-down" />
            <Icon size={40} icon="arrow-sm-left" />
            <Icon size={40} icon="arrow-sm-right" />
            <Icon size={40} icon="arrow-sm-up" />
            <Icon size={40} icon="arrows-expand" />
            <Icon size={40} icon="at-symbol" />
            <Icon size={40} icon="backspace" />
            <Icon size={40} icon="badge-check" />
            <Icon size={40} icon="ban" />
            <Icon size={40} icon="beaker" />
            <Icon size={40} icon="bell" />
            <Icon size={40} icon="bookmark" />
            <Icon size={40} icon="bookmark-alt" />
            <Icon size={40} icon="book-open" />
            <Icon size={40} icon="briefcase" />
            <Icon size={40} icon="cake" />
            <Icon size={40} icon="calculator" />
            <Icon size={40} icon="calendar" />
            <Icon size={40} icon="camera" />
            <Icon size={40} icon="cash" />
            <Icon size={40} icon="chart-bar" />
            <Icon size={40} icon="chart-pie" />
            <Icon size={40} icon="chart-square-bar" />
            <Icon size={40} icon="chat" />
            <Icon size={40} icon="chat-alt" />
            <Icon size={40} icon="chat-alt-2" />
            <Icon size={40} icon="check" />
            <Icon size={40} icon="check-circle" />
            <Icon size={40} icon="chevron-double-down" />
            <Icon size={40} icon="chevron-double-left" />
            <Icon size={40} icon="chevron-double-right" />
            <Icon size={40} icon="chevron-double-up" />
            <Icon size={40} icon="chevron-down" />
            <Icon size={40} icon="chevron-left" />
            <Icon size={40} icon="chevron-right" />
            <Icon size={40} icon="chevron-up" />
            <Icon size={40} icon="chip" />
            <Icon size={40} icon="clipboard" />
            <Icon size={40} icon="clipboard-check" />
            <Icon size={40} icon="clipboard-copy" />
            <Icon size={40} icon="clipboard-list" />
            <Icon size={40} icon="clock" />
            <Icon size={40} icon="cloud" />
            <Icon size={40} icon="cloud-download" />
            <Icon size={40} icon="cloud-upload" />
            <Icon size={40} icon="code" />
            <Icon size={40} icon="cog" />
            <Icon size={40} icon="collection" />
            <Icon size={40} icon="color-swatch" />
            <Icon size={40} icon="credit-card" />
            <Icon size={40} icon="cube" />
            <Icon size={40} icon="cube-transparent" />
            <Icon size={40} icon="currency-bangladeshi" />
            <Icon size={40} icon="currency-dollar" />
            <Icon size={40} icon="currency-euro" />
            <Icon size={40} icon="currency-pound" />
            <Icon size={40} icon="currency-rupee" />
            <Icon size={40} icon="currency-yen" />
            <Icon size={40} icon="cursor-click" />
            <Icon size={40} icon="database" />
            <Icon size={40} icon="desktop-computer" />
            <Icon size={40} icon="device-mobile" />
            <Icon size={40} icon="device-tablet" />
            <Icon size={40} icon="document" />
            <Icon size={40} icon="document-add" />
            <Icon size={40} icon="document-download" />
            <Icon size={40} icon="document-duplicate" />
            <Icon size={40} icon="document-remove" />
            <Icon size={40} icon="document-report" />
            <Icon size={40} icon="document-search" />
            <Icon size={40} icon="document-text" />
            <Icon size={40} icon="dots-circle-horizontal" />
            <Icon size={40} icon="dots-horizontal" />
            <Icon size={40} icon="dots-vertical" />
            <Icon size={40} icon="download" />
            <Icon size={40} icon="duplicate" />
            <Icon size={40} icon="emoji-happy" />
            <Icon size={40} icon="emoji-sad" />
            <Icon size={40} icon="exclamation" />
            <Icon size={40} icon="exclamation-circle" />
            <Icon size={40} icon="external-link" />
            <Icon size={40} icon="eye" />
            <Icon size={40} icon="eye-off" />
            <Icon size={40} icon="fast-forward" />
            <Icon size={40} icon="film" />
            <Icon size={40} icon="filter" />
            <Icon size={40} icon="fingerprint" />
            <Icon size={40} icon="fire" />
            <Icon size={40} icon="flag" />
            <Icon size={40} icon="folder" />
            <Icon size={40} icon="folder-add" />
            <Icon size={40} icon="folder-download" />
            <Icon size={40} icon="folder-open" />
            <Icon size={40} icon="folder-remove" />
            <Icon size={40} icon="gift" />
            <Icon size={40} icon="globe" />
            <Icon size={40} icon="globe-alt" />
            <Icon size={40} icon="hand" />
            <Icon size={40} icon="hashtag" />
            <Icon size={40} icon="heart" />
            <Icon size={40} icon="home" />
            <Icon size={40} icon="identification" />
            <Icon size={40} icon="inbox" />
            <Icon size={40} icon="inbox-in" />
            <Icon size={40} icon="information-circle" />
            <Icon size={40} icon="key" />
            <Icon size={40} icon="library" />
            <Icon size={40} icon="light-bulb" />
            <Icon size={40} icon="lightning-bolt" />
            <Icon size={40} icon="link" />
            <Icon size={40} icon="location-marker" />
            <Icon size={40} icon="lock-closed" />
            <Icon size={40} icon="lock-open" />
            <Icon size={40} icon="login" />
            <Icon size={40} icon="logout" />
            <Icon size={40} icon="mail" />
            <Icon size={40} icon="mail-open" />
            <Icon size={40} icon="map" />
            <Icon size={40} icon="menu" />
            <Icon size={40} icon="menu-alt-1" />
            <Icon size={40} icon="menu-alt-2" />
            <Icon size={40} icon="menu-alt-3" />
            <Icon size={40} icon="menu-alt-4" />
            <Icon size={40} icon="microphone" />
            <Icon size={40} icon="minus" />
            <Icon size={40} icon="minus-circle" />
            <Icon size={40} icon="moon" />
            <Icon size={40} icon="music-note" />
            <Icon size={40} icon="newspaper" />
            <Icon size={40} icon="office-building" />
            <Icon size={40} icon="paper-airplane" />
            <Icon size={40} icon="paper-clip" />
            <Icon size={40} icon="pause" />
            <Icon size={40} icon="pencil" />
            <Icon size={40} icon="pencil-alt" />
            <Icon size={40} icon="phone" />
            <Icon size={40} icon="phone-incoming" />
            <Icon size={40} icon="phone-missed-call" />
            <Icon size={40} icon="phone-outgoing" />
            <Icon size={40} icon="photograph" />
            <Icon size={40} icon="play" />
            <Icon size={40} icon="plus" />
            <Icon size={40} icon="plus-circle" />
            <Icon size={40} icon="presentation-chart-bar" />
            <Icon size={40} icon="presentation-chart-line" />
            <Icon size={40} icon="printer" />
            <Icon size={40} icon="puzzle" />
            <Icon size={40} icon="qrcode" />
            <Icon size={40} icon="question-mark-circle" />
            <Icon size={40} icon="receipt-refund" />
            <Icon size={40} icon="receipt-tax" />
            <Icon size={40} icon="refresh" />
            <Icon size={40} icon="reply" />
            <Icon size={40} icon="rewind" />
            <Icon size={40} icon="rss" />
            <Icon size={40} icon="save" />
            <Icon size={40} icon="save-as" />
            <Icon size={40} icon="scale" />
            <Icon size={40} icon="scissors" />
            <Icon size={40} icon="search" />
            <Icon size={40} icon="search-circle" />
            <Icon size={40} icon="selector" />
            <Icon size={40} icon="server" />
            <Icon size={40} icon="share" />
            <Icon size={40} icon="shield-check" />
            <Icon size={40} icon="shield-exclamation" />
            <Icon size={40} icon="shopping-bag" />
            <Icon size={40} icon="shopping-cart" />
            <Icon size={40} icon="sort-ascending" />
            <Icon size={40} icon="sort-descending" />
            <Icon size={40} icon="sparkles" />
            <Icon size={40} icon="speakerphone" />
            <Icon size={40} icon="star" />
            <Icon size={40} icon="status-offline" />
            <Icon size={40} icon="status-online" />
            <Icon size={40} icon="stop" />
            <Icon size={40} icon="sun" />
            <Icon size={40} icon="support" />
            <Icon size={40} icon="switch-horizontal" />
            <Icon size={40} icon="switch-vertical" />
            <Icon size={40} icon="table" />
            <Icon size={40} icon="tag" />
            <Icon size={40} icon="template" />
            <Icon size={40} icon="terminal" />
            <Icon size={40} icon="thumb-down" />
            <Icon size={40} icon="thumb-up" />
            <Icon size={40} icon="ticket" />
            <Icon size={40} icon="translate" />
            <Icon size={40} icon="trash" />
            <Icon size={40} icon="trending-down" />
            <Icon size={40} icon="trending-up" />
            <Icon size={40} icon="truck" />
            <Icon size={40} icon="upload" />
            <Icon size={40} icon="user" />
            <Icon size={40} icon="user-add" />
            <Icon size={40} icon="user-circle" />
            <Icon size={40} icon="user-group" />
            <Icon size={40} icon="user-remove" />
            <Icon size={40} icon="users" />
            <Icon size={40} icon="variable" />
            <Icon size={40} icon="video-camera" />
            <Icon size={40} icon="view-boards" />
            <Icon size={40} icon="view-grid" />
            <Icon size={40} icon="view-grid-add" />
            <Icon size={40} icon="view-list" />
            <Icon size={40} icon="volume-off" />
            <Icon size={40} icon="volume-up" />
            <Icon size={40} icon="wifi" />
            <Icon size={40} icon="x" />
            <Icon size={40} icon="x-circle" />
            <Icon size={40} icon="zoom-in" />
            <Icon size={40} icon="zoom-out" />
        </div>
    );
};

export const AcademicCap = StoryTemplate.bind({});
AcademicCap.args = { icon: 'academic-cap' };

export const Adjustments = StoryTemplate.bind({});
Adjustments.args = { icon: 'adjustments' };

export const Annotation = StoryTemplate.bind({});
Annotation.args = { icon: 'annotation' };

export const Archive = StoryTemplate.bind({});
Archive.args = { icon: 'archive' };

export const ArrowCircleDown = StoryTemplate.bind({});
ArrowCircleDown.args = { icon: 'arrow-circle-down' };

export const ArrowCircleLeft = StoryTemplate.bind({});
ArrowCircleLeft.args = { icon: 'arrow-circle-left' };

export const ArrowCircleRight = StoryTemplate.bind({});
ArrowCircleRight.args = { icon: 'arrow-circle-right' };

export const ArrowCircleUp = StoryTemplate.bind({});
ArrowCircleUp.args = { icon: 'arrow-circle-up' };

export const ArrowDown = StoryTemplate.bind({});
ArrowDown.args = { icon: 'arrow-down' };

export const ArrowLeft = StoryTemplate.bind({});
ArrowLeft.args = { icon: 'arrow-left' };

export const ArrowRight = StoryTemplate.bind({});
ArrowRight.args = { icon: 'arrow-right' };

export const ArrowUp = StoryTemplate.bind({});
ArrowUp.args = { icon: 'arrow-up' };

export const ArrowSmallDown = StoryTemplate.bind({});
ArrowSmallDown.args = { icon: 'arrow-sm-down' };

export const ArrowSmallLeft = StoryTemplate.bind({});
ArrowSmallLeft.args = { icon: 'arrow-sm-left' };

export const ArrowSmallRight = StoryTemplate.bind({});
ArrowSmallRight.args = { icon: 'arrow-sm-right' };

export const ArrowSmallUp = StoryTemplate.bind({});
ArrowSmallUp.args = { icon: 'arrow-sm-up' };

export const ArrowsExpand = StoryTemplate.bind({});
ArrowsExpand.args = { icon: 'arrows-expand' };

export const AtSymbol = StoryTemplate.bind({});
AtSymbol.args = { icon: 'at-symbol' };

export const Backspace = StoryTemplate.bind({});
Backspace.args = { icon: 'backspace' };

export const BadgeCheck = StoryTemplate.bind({});
BadgeCheck.args = { icon: 'badge-check' };

export const Ban = StoryTemplate.bind({});
Ban.args = { icon: 'ban' };

export const Beaker = StoryTemplate.bind({});
Beaker.args = { icon: 'beaker' };

export const Bell = StoryTemplate.bind({});
Bell.args = { icon: 'bell' };

export const Bookmark = StoryTemplate.bind({});
Bookmark.args = { icon: 'bookmark' };

export const BookmarkAlt = StoryTemplate.bind({});
BookmarkAlt.args = { icon: 'bookmark-alt' };

export const BookOpen = StoryTemplate.bind({});
BookOpen.args = { icon: 'book-open' };

export const Briefcase = StoryTemplate.bind({});
Briefcase.args = { icon: 'briefcase' };

export const Cake = StoryTemplate.bind({});
Cake.args = { icon: 'cake' };

export const Calculator = StoryTemplate.bind({});
Calculator.args = { icon: 'calculator' };

export const Calendar = StoryTemplate.bind({});
Calendar.args = { icon: 'calendar' };

export const Camera = StoryTemplate.bind({});
Camera.args = { icon: 'camera' };

export const Cash = StoryTemplate.bind({});
Cash.args = { icon: 'cash' };

export const ChartBar = StoryTemplate.bind({});
ChartBar.args = { icon: 'chart-bar' };

export const ChartPie = StoryTemplate.bind({});
ChartPie.args = { icon: 'chart-pie' };

export const ChartSquareBar = StoryTemplate.bind({});
ChartSquareBar.args = { icon: 'chart-square-bar' };

export const Chat = StoryTemplate.bind({});
Chat.args = { icon: 'chat' };

export const ChatAlt = StoryTemplate.bind({});
ChatAlt.args = { icon: 'chat-alt' };

export const ChatAlt2 = StoryTemplate.bind({});
ChatAlt2.args = { icon: 'chat-alt-2' };

export const Check = StoryTemplate.bind({});
Check.args = { icon: 'check' };

export const CheckCircle = StoryTemplate.bind({});
CheckCircle.args = { icon: 'check-circle' };

export const ChevronDoubleDown = StoryTemplate.bind({});
ChevronDoubleDown.args = { icon: 'chevron-double-down' };

export const ChevronDoubleLeft = StoryTemplate.bind({});
ChevronDoubleLeft.args = { icon: 'chevron-double-left' };

export const ChevronDoubleRight = StoryTemplate.bind({});
ChevronDoubleRight.args = { icon: 'chevron-double-right' };

export const ChevronDoubleUp = StoryTemplate.bind({});
ChevronDoubleUp.args = { icon: 'chevron-double-up' };

export const ChevronDown = StoryTemplate.bind({});
ChevronDown.args = { icon: 'chevron-down' };

export const ChevronLeft = StoryTemplate.bind({});
ChevronLeft.args = { icon: 'chevron-left' };

export const ChevronRight = StoryTemplate.bind({});
ChevronRight.args = { icon: 'chevron-right' };

export const ChevronUp = StoryTemplate.bind({});
ChevronUp.args = { icon: 'chevron-up' };

export const Chip = StoryTemplate.bind({});
Chip.args = { icon: 'chip' };

export const Clipboard = StoryTemplate.bind({});
Clipboard.args = { icon: 'clipboard' };

export const ClipboardCheck = StoryTemplate.bind({});
ClipboardCheck.args = { icon: 'clipboard-check' };
export const ClipboardCopy = StoryTemplate.bind({});
ClipboardCopy.args = { icon: 'clipboard-copy' };

export const ClipboardList = StoryTemplate.bind({});
ClipboardList.args = { icon: 'clipboard-list' };

export const Clock = StoryTemplate.bind({});
Clock.args = { icon: 'clock' };

export const Cloud = StoryTemplate.bind({});
Cloud.args = { icon: 'cloud' };

export const CloudDownload = StoryTemplate.bind({});
CloudDownload.args = { icon: 'cloud-download' };

export const CloadUpload = StoryTemplate.bind({});
CloadUpload.args = { icon: 'cloud-upload' };

export const Code = StoryTemplate.bind({});
Code.args = { icon: 'code' };

export const Cog = StoryTemplate.bind({});
Cog.args = { icon: 'cog' };

export const Collection = StoryTemplate.bind({});
Collection.args = { icon: 'collection' };

export const ColorSwatch = StoryTemplate.bind({});
ColorSwatch.args = { icon: 'color-swatch' };

export const CreditCard = StoryTemplate.bind({});
CreditCard.args = { icon: 'credit-card' };

export const Cube = StoryTemplate.bind({});
Cube.args = { icon: 'cube' };

export const CubeTransparent = StoryTemplate.bind({});
CubeTransparent.args = { icon: 'cube-transparent' };

export const CurrencyBangladeshi = StoryTemplate.bind({});
CurrencyBangladeshi.args = { icon: 'currency-bangladeshi' };

export const CurrencyDollar = StoryTemplate.bind({});
CurrencyDollar.args = { icon: 'currency-dollar' };

export const CurrencyEuro = StoryTemplate.bind({});
CurrencyEuro.args = { icon: 'currency-euro' };

export const CurrencyPound = StoryTemplate.bind({});
CurrencyPound.args = { icon: 'currency-pound' };

export const CurrencyRupee = StoryTemplate.bind({});
CurrencyRupee.args = { icon: 'currency-rupee' };

export const CurrencyYen = StoryTemplate.bind({});
CurrencyYen.args = { icon: 'currency-yen' };

export const CursorClick = StoryTemplate.bind({});
CursorClick.args = { icon: 'cursor-click' };

export const Database = StoryTemplate.bind({});
Database.args = { icon: 'database' };

export const DesktopComputer = StoryTemplate.bind({});
DesktopComputer.args = { icon: 'desktop-computer' };

export const DeviceMobile = StoryTemplate.bind({});
DeviceMobile.args = { icon: 'device-mobile' };

export const DeviceTablet = StoryTemplate.bind({});
DeviceTablet.args = { icon: 'device-tablet' };

export const Document = StoryTemplate.bind({});
Document.args = { icon: 'document' };

export const DocumentAdd = StoryTemplate.bind({});
DocumentAdd.args = { icon: 'document-add' };

export const DocumentDownload = StoryTemplate.bind({});
DocumentDownload.args = { icon: 'document-download' };

export const DocumentDuplicate = StoryTemplate.bind({});
DocumentDuplicate.args = { icon: 'document-duplicate' };

export const DocumentRemove = StoryTemplate.bind({});
DocumentRemove.args = { icon: 'document-remove' };

export const DocumentReport = StoryTemplate.bind({});
DocumentReport.args = { icon: 'document-report' };

export const DocumentSearch = StoryTemplate.bind({});
DocumentSearch.args = { icon: 'document-search' };

export const DocumentText = StoryTemplate.bind({});
DocumentText.args = { icon: 'document-text' };

export const DotsCircleHorizontal = StoryTemplate.bind({});
DotsCircleHorizontal.args = { icon: 'dots-circle-horizontal' };

export const DotsHorizontal = StoryTemplate.bind({});
DotsHorizontal.args = { icon: 'dots-horizontal' };

export const DotsVertical = StoryTemplate.bind({});
DotsVertical.args = { icon: 'dots-vertical' };

export const Download = StoryTemplate.bind({});
Download.args = { icon: 'download' };

export const Duplicate = StoryTemplate.bind({});
Duplicate.args = { icon: 'duplicate' };

export const EmojiHappy = StoryTemplate.bind({});
EmojiHappy.args = { icon: 'emoji-happy' };

export const EmojiSad = StoryTemplate.bind({});
EmojiSad.args = { icon: 'emoji-sad' };

export const Exclamation = StoryTemplate.bind({});
Exclamation.args = { icon: 'exclamation' };

export const ExclamationCircle = StoryTemplate.bind({});
ExclamationCircle.args = { icon: 'exclamation-circle' };

export const ExternalLink = StoryTemplate.bind({});
ExternalLink.args = { icon: 'external-link' };

export const Eye = StoryTemplate.bind({});
Eye.args = { icon: 'eye' };

export const EyeOff = StoryTemplate.bind({});
EyeOff.args = { icon: 'eye-off' };

export const FastForward = StoryTemplate.bind({});
FastForward.args = { icon: 'fast-forward' };

export const Film = StoryTemplate.bind({});
Film.args = { icon: 'film' };

export const Filter = StoryTemplate.bind({});
Filter.args = { icon: 'filter' };

export const Fingerprint = StoryTemplate.bind({});
Fingerprint.args = { icon: 'fingerprint' };

export const Fire = StoryTemplate.bind({});
Fire.args = { icon: 'fire' };

export const Flag = StoryTemplate.bind({});
Flag.args = { icon: 'flag' };

export const Folder = StoryTemplate.bind({});
Folder.args = { icon: 'folder' };

export const FolderAdd = StoryTemplate.bind({});
FolderAdd.args = { icon: 'folder-add' };

export const FolderDownload = StoryTemplate.bind({});
FolderDownload.args = { icon: 'folder-download' };

export const FolderOpen = StoryTemplate.bind({});
FolderOpen.args = { icon: 'folder-open' };

export const FolderRemove = StoryTemplate.bind({});
FolderRemove.args = { icon: 'folder-remove' };

export const Gift = StoryTemplate.bind({});
Gift.args = { icon: 'gift' };

export const Globe = StoryTemplate.bind({});
Globe.args = { icon: 'globe' };

export const GlobeAlt = StoryTemplate.bind({});
GlobeAlt.args = { icon: 'globe-alt' };

export const Hand = StoryTemplate.bind({});
Hand.args = { icon: 'hand' };

export const Hashtag = StoryTemplate.bind({});
Hashtag.args = { icon: 'hashtag' };

export const Heart = StoryTemplate.bind({});
Heart.args = { icon: 'heart' };

export const Home = StoryTemplate.bind({});
Home.args = { icon: 'home' };

export const Identification = StoryTemplate.bind({});
Identification.args = { icon: 'identification' };

export const Inbox = StoryTemplate.bind({});
Inbox.args = { icon: 'inbox' };

export const InboxIn = StoryTemplate.bind({});
InboxIn.args = { icon: 'inbox-in' };

export const InformationCircle = StoryTemplate.bind({});
InformationCircle.args = { icon: 'information-circle' };

export const Key = StoryTemplate.bind({});
Key.args = { icon: 'key' };

export const Library = StoryTemplate.bind({});
Library.args = { icon: 'library' };

export const LightBulb = StoryTemplate.bind({});
LightBulb.args = { icon: 'light-bulb' };

export const LightningBolt = StoryTemplate.bind({});
LightningBolt.args = { icon: 'lightning-bolt' };

export const Link = StoryTemplate.bind({});
Link.args = { icon: 'link' };

export const LocationMarker = StoryTemplate.bind({});
LocationMarker.args = { icon: 'location-marker' };

export const LockClosed = StoryTemplate.bind({});
LockClosed.args = { icon: 'lock-closed' };

export const LockOpen = StoryTemplate.bind({});
LockOpen.args = { icon: 'lock-open' };

export const Login = StoryTemplate.bind({});
Login.args = { icon: 'login' };

export const Logout = StoryTemplate.bind({});
Logout.args = { icon: 'logout' };

export const Mail = StoryTemplate.bind({});
Mail.args = { icon: 'mail' };

export const MailOpen = StoryTemplate.bind({});
MailOpen.args = { icon: 'mail-open' };

export const Map = StoryTemplate.bind({});
Map.args = { icon: 'map' };

export const Menu = StoryTemplate.bind({});
Menu.args = { icon: 'menu' };

export const MenuAlt1 = StoryTemplate.bind({});
MenuAlt1.args = { icon: 'menu-alt-1' };

export const MenuAlt2 = StoryTemplate.bind({});
MenuAlt2.args = { icon: 'menu-alt-2' };

export const MenuAlt3 = StoryTemplate.bind({});
MenuAlt3.args = { icon: 'menu-alt-3' };

export const MenuAlt4 = StoryTemplate.bind({});
MenuAlt4.args = { icon: 'menu-alt-4' };

export const Microphone = StoryTemplate.bind({});
Microphone.args = { icon: 'microphone' };

export const Minus = StoryTemplate.bind({});
Minus.args = { icon: 'minus' };

export const MinusCircle = StoryTemplate.bind({});
MinusCircle.args = { icon: 'minus-circle' };

export const Moon = StoryTemplate.bind({});
Moon.args = { icon: 'moon' };

export const MusicNote = StoryTemplate.bind({});
MusicNote.args = { icon: 'music-note' };

export const Newspaper = StoryTemplate.bind({});
Newspaper.args = { icon: 'newspaper' };

export const OfficeBuilding = StoryTemplate.bind({});
OfficeBuilding.args = { icon: 'office-building' };

export const PaperAirplane = StoryTemplate.bind({});
PaperAirplane.args = { icon: 'paper-airplane' };

export const PaperClip = StoryTemplate.bind({});
PaperClip.args = { icon: 'paper-clip' };

export const Pause = StoryTemplate.bind({});
Pause.args = { icon: 'pause' };

export const Pencil = StoryTemplate.bind({});
Pencil.args = { icon: 'pencil' };

export const PencilAlt = StoryTemplate.bind({});
PencilAlt.args = { icon: 'pencil-alt' };

export const Phone = StoryTemplate.bind({});
Phone.args = { icon: 'phone' };

export const PhoneIncoming = StoryTemplate.bind({});
PhoneIncoming.args = { icon: 'phone-incoming' };

export const PhoneMissedCall = StoryTemplate.bind({});
PhoneMissedCall.args = { icon: 'phone-missed-call' };

export const PhoneOutgoing = StoryTemplate.bind({});
PhoneOutgoing.args = { icon: 'phone-outgoing' };

export const Photograph = StoryTemplate.bind({});
Photograph.args = { icon: 'photograph' };

export const Play = StoryTemplate.bind({});
Play.args = { icon: 'play' };

export const Plus = StoryTemplate.bind({});
Plus.args = { icon: 'plus' };

export const PlusCircle = StoryTemplate.bind({});
PlusCircle.args = { icon: 'plus-circle' };

export const PresentationChartBar = StoryTemplate.bind({});
PresentationChartBar.args = { icon: 'presentation-chart-bar' };

export const PresentationChartLine = StoryTemplate.bind({});
PresentationChartLine.args = { icon: 'presentation-chart-line' };

export const Printer = StoryTemplate.bind({});
Printer.args = { icon: 'printer' };

export const Puzzle = StoryTemplate.bind({});
Puzzle.args = { icon: 'puzzle' };

export const QRCode = StoryTemplate.bind({});
QRCode.args = { icon: 'qrcode' };

export const QuestionMarkCircle = StoryTemplate.bind({});
QuestionMarkCircle.args = { icon: 'question-mark-circle' };

export const ReceiptRefund = StoryTemplate.bind({});
ReceiptRefund.args = { icon: 'receipt-refund' };

export const ReceiptTax = StoryTemplate.bind({});
ReceiptTax.args = { icon: 'receipt-tax' };

export const Refresh = StoryTemplate.bind({});
Refresh.args = { icon: 'refresh' };

export const Reply = StoryTemplate.bind({});
Reply.args = { icon: 'reply' };

export const Rewind = StoryTemplate.bind({});
Rewind.args = { icon: 'rewind' };

export const Rss = StoryTemplate.bind({});
Rss.args = { icon: 'rss' };

export const Save = StoryTemplate.bind({});
Save.args = { icon: 'save' };

export const SaveAs = StoryTemplate.bind({});
SaveAs.args = { icon: 'save-as' };

export const Scale = StoryTemplate.bind({});
Scale.args = { icon: 'scale' };

export const Scissors = StoryTemplate.bind({});
Scissors.args = { icon: 'scissors' };

export const Search = StoryTemplate.bind({});
Search.args = { icon: 'search' };

export const SearchCircle = StoryTemplate.bind({});
SearchCircle.args = { icon: 'search-circle' };

export const Selector = StoryTemplate.bind({});
Selector.args = { icon: 'selector' };

export const Server = StoryTemplate.bind({});
Server.args = { icon: 'server' };

export const Share = StoryTemplate.bind({});
Share.args = { icon: 'share' };

export const ShieldCheck = StoryTemplate.bind({});
ShieldCheck.args = { icon: 'shield-check' };

export const ShieldExclamation = StoryTemplate.bind({});
ShieldExclamation.args = { icon: 'shield-exclamation' };

export const ShoppingBag = StoryTemplate.bind({});
ShoppingBag.args = { icon: 'shopping-bag' };

export const ShoppingCart = StoryTemplate.bind({});
ShoppingCart.args = { icon: 'shopping-cart' };

export const SortAscending = StoryTemplate.bind({});
SortAscending.args = { icon: 'sort-ascending' };

export const SortDescending = StoryTemplate.bind({});
SortDescending.args = { icon: 'sort-descending' };

export const Sparkles = StoryTemplate.bind({});
Sparkles.args = { icon: 'sparkles' };

export const Speakerphone = StoryTemplate.bind({});
Speakerphone.args = { icon: 'speakerphone' };

export const Star = StoryTemplate.bind({});
Star.args = { icon: 'star' };

export const StatusOffline = StoryTemplate.bind({});
StatusOffline.args = { icon: 'status-offline' };

export const StatusOnline = StoryTemplate.bind({});
StatusOnline.args = { icon: 'status-online' };

export const Stop = StoryTemplate.bind({});
Stop.args = { icon: 'stop' };

export const Sun = StoryTemplate.bind({});
Sun.args = { icon: 'sun' };

export const Support = StoryTemplate.bind({});
Support.args = { icon: 'support' };

export const SwitchHorizontal = StoryTemplate.bind({});
SwitchHorizontal.args = { icon: 'switch-horizontal' };

export const SwitchVertical = StoryTemplate.bind({});
SwitchVertical.args = { icon: 'switch-vertical' };

export const Table = StoryTemplate.bind({});
Table.args = { icon: 'table' };

export const Tag = StoryTemplate.bind({});
Tag.args = { icon: 'tag' };

export const Template = StoryTemplate.bind({});
Template.args = { icon: 'template' };

export const Terminal = StoryTemplate.bind({});
Terminal.args = { icon: 'terminal' };

export const ThumbDown = StoryTemplate.bind({});
ThumbDown.args = { icon: 'thumb-down' };

export const ThumbUp = StoryTemplate.bind({});
ThumbUp.args = { icon: 'thumb-up' };

export const Ticket = StoryTemplate.bind({});
Ticket.args = { icon: 'ticket' };

export const Translate = StoryTemplate.bind({});
Translate.args = { icon: 'translate' };

export const Trash = StoryTemplate.bind({});
Trash.args = { icon: 'trash' };

export const TrendingDown = StoryTemplate.bind({});
TrendingDown.args = { icon: 'trending-down' };

export const TrendingUp = StoryTemplate.bind({});
TrendingUp.args = { icon: 'trending-up' };

export const Truck = StoryTemplate.bind({});
Truck.args = { icon: 'truck' };

export const Upload = StoryTemplate.bind({});
Upload.args = { icon: 'upload' };

export const User = StoryTemplate.bind({});
User.args = { icon: 'user' };

export const UserAdd = StoryTemplate.bind({});
UserAdd.args = { icon: 'user-add' };

export const UserCircle = StoryTemplate.bind({});
UserCircle.args = { icon: 'user-circle' };

export const UserGroup = StoryTemplate.bind({});
UserGroup.args = { icon: 'user-group' };

export const UserRemove = StoryTemplate.bind({});
UserRemove.args = { icon: 'user-remove' };

export const Users = StoryTemplate.bind({});
Users.args = { icon: 'users' };

export const Variable = StoryTemplate.bind({});
Variable.args = { icon: 'variable' };

export const VideoCamera = StoryTemplate.bind({});
VideoCamera.args = { icon: 'video-camera' };

export const ViewBoards = StoryTemplate.bind({});
ViewBoards.args = { icon: 'view-boards' };

export const ViewGrid = StoryTemplate.bind({});
ViewGrid.args = { icon: 'view-grid' };

export const ViewGridAdd = StoryTemplate.bind({});
ViewGridAdd.args = { icon: 'view-grid-add' };

export const ViewList = StoryTemplate.bind({});
ViewList.args = { icon: 'view-list' };

export const VolumeOff = StoryTemplate.bind({});
VolumeOff.args = { icon: 'volume-off' };

export const VolumeUp = StoryTemplate.bind({});
VolumeUp.args = { icon: 'volume-up' };

export const Wifi = StoryTemplate.bind({});
Wifi.args = { icon: 'wifi' };

export const X = StoryTemplate.bind({});
X.args = { icon: 'x' };

export const XCircle = StoryTemplate.bind({});
XCircle.args = { icon: 'x-circle' };

export const ZoomIn = StoryTemplate.bind({});
ZoomIn.args = { icon: 'zoom-in' };

export const ZoomOut = StoryTemplate.bind({});
ZoomOut.args = { icon: 'zoom-out' };
