export declare type PlayFunction = () => void;
export declare type ReturnValue = [PlayFunction];
interface TuseSoundProps {
    src: string;
    volume?: number;
}
export declare const useSound: (props: TuseSoundProps) => ReturnValue;
export default useSound;
