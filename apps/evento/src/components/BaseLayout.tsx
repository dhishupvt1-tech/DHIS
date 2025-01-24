import { ReactNode } from "react";
import {Info} from "lucide-react";

interface BaseLayoutProps {
    title: string; // Title for the layout
    topRight?: ReactNode; // Optional top-right component
}

interface BaseLayoutTopRightProps {
    children: ReactNode; // Elements for the top-right slot

}

interface BaseLayoutInfoBarProps {
    children?: ReactNode; // Elements for the top-right slot
    text:string;

}

interface BaseLayoutContentProps {
    children: ReactNode; // Main content of the page
}

const BaseLayout = ({ title, children,topRight }: BaseLayoutProps & { children: ReactNode }) => {
    return (
        <div className="flex flex-col h-full gap-4 p-4">
            {/* Top Bar */}
            <div className="flex gap-2 items-center">
                <h1 className="text-3xl font-bold tracking-tighter mr-auto">{title}</h1>
                {topRight && <div>{topRight}</div>}
            </div>

            {/* Render slots */}
            {children}
        </div>
    );
};

const BaseLayoutInfoBar = ({ children,text }: BaseLayoutInfoBarProps) => {
    return <div className="w-full p-4 rounded-lg backdrop-contrast-50 backdrop-opacity-20 flex gap-2 items-center text-xs text-opacity-50"><Info className="opacity-50"/>{text}</div>;
};

const BaseLayoutTopRight = ({ children }: BaseLayoutTopRightProps) => {
    return <div className="ml-auto flex gap-2 items-center">{children}</div>;
};

const BaseLayoutContent = ({ children }: BaseLayoutContentProps) => {
    return <div className="flex flex-col gap-4 w-full">{children}</div>;
};

// Attach subcomponents to BaseLayout
BaseLayout.TopRight = BaseLayoutTopRight;
BaseLayout.Content = BaseLayoutContent;
BaseLayout.InfoBar = BaseLayoutInfoBar;

export default BaseLayout;
