import { ControlValueAccessor } from "@angular/forms";
import { View } from "tns-core-modules/ui/core/view";

export class BaseValueAccessor<TView extends View> implements ControlValueAccessor {
    private pendingChangeNotification: number = 0;
    onChange = (_) => { };
    onTouched = () => {};

    constructor(public view: TView) { }

    registerOnChange(fn: (_: any) => void): void {
        this.onChange = (arg) => {
            if (this.pendingChangeNotification) {
                clearTimeout(this.pendingChangeNotification);
            }
            this.pendingChangeNotification = setTimeout(() => {
                this.pendingChangeNotification = 0;
                fn(arg);
            }, 20);
        };
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.view.isEnabled = !isDisabled;
    }

    writeValue(_: any) { }
}
