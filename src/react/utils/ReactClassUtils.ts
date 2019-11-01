import {Subject, Subscription} from "rxjs";

/**
 * We use this interface to make sure that we do not pass by mistake
 * some component that does not have a subscriptions field.
 * */
interface ComponentWithSubs {
    subscriptions:Subscription[];
    forceUpdate(callback?:any) : void;
}


/**
 * Adds a subscription to the given component, based on the given subject.
 * When the subject fires, forceUpdate() will be called.
 * The subscription is stored in the component.subscriptions array. Use the function unsubscribeAll to delete them.
 * */
export function updateOn(sbj:Subject<any>, component:ComponentWithSubs) {
    if(!component || !component.subscriptions) return;
    component.subscriptions.push(
        sbj.subscribe(data => component.forceUpdate())
    );
}

/** Call this on componentWillUnmount to cancel all subscriptions. */
export function unsubscribeAll(component:ComponentWithSubs) {
    if(!component || !component.subscriptions) return;
    component.subscriptions.forEach((s:Subscription) => s.unsubscribe());
    component.subscriptions = [];
}