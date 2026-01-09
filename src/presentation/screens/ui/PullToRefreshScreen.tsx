import { RefreshControl, ScrollView } from 'react-native';
import { Title } from '../../components/ui/Title';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { globalStyles } from '../../../config/theme/theme';

export const PullToRefreshScreen = () => {

    const [isRefreshing, setIsRefreshing] = useState(false)

    const { top } = useSafeAreaInsets();

    const onRefresh = () => {
        setIsRefreshing(true);

        setTimeout(() => {
            setIsRefreshing(false);
        }, 2000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    onRefresh={ onRefresh }
                />
            }

            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            <Title text='Pull To Refresh' safe />
        </ScrollView>
    )
}