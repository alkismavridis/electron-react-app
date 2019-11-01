/* eslint-disable react-hooks/exhaustive-deps*/

import {Subject, Subscription} from "rxjs";
import {useCallback, useEffect, useState} from "react";

export function useSubscriptions(subjects: Subject<any>[]) {
    const [, updater] = useState();
    const forceUpdate = useCallback(() => updater({}), []);

    useEffect(() => {
        const subs:Subscription[] = [];
        subjects.forEach(s => subs.push(s.subscribe(forceUpdate)));

        return () => {
            subs.forEach(s => s.unsubscribe());
        };
    }, [subjects]);
}

/** If you have only one subscription, use this. */
export function useSubscription(subject: Subject<any>) {
    const [, updater] = useState();
    const forceUpdate = useCallback(() => updater({}), []);

    useEffect(() => {
        const subscription = subject.subscribe(forceUpdate);
        return () => subscription.unsubscribe();
    }, []);
}
