/* eslint-disable react-native/no-inline-styles */
import {Text} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
// import * as React from 'react'
import {Animated, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {Path} from 'react-native-svg';
import {LineChart} from 'react-native-svg-charts';
import {formatCurrency, getRangedData} from '../functions';
import {RangedData} from '../types';

const data = getRangedData(600);

const width = Dimensions.get('window').width;
const chartHeight = 200;
const tooltipWidth = 160;

const CustomLine = ({line}: {line?: string}) => (
  <Path key="line" d={line} stroke="#FEBE18" strokeWidth={2} fill="none" />
);

const Tooltip = ({
  positionX,
  items,
}: {
  positionX: Animated.Value;
  items: RangedData[];
}) => {
  const tooltipX = useRef(new Animated.Value(0)).current;
  const [item, setItem] = useState<RangedData | null>(null);
  const size = items.length;
  useEffect(() => {
    const id = positionX.addListener(state => {
      let xLocation = state.value;
      const xDistance = width / size;
      if (xLocation <= 0) {
        xLocation = 0;
      }
      if (xLocation >= width) {
        xLocation = width;
      }

      let value = Number((xLocation / xDistance).toFixed(0));
      if (value >= size - 1) {
        value = size - 1;
      }
      setItem(items[value]);

      // Set tooltip dimensions
      const limit = tooltipWidth + state.value;
      if (limit >= width) {
        tooltipX.setValue(width - tooltipWidth);
      } else {
        tooltipX.setValue(state.value);
      }
    });

    return () => {
      positionX.removeListener(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'black',
          position: 'absolute',
          width: tooltipWidth,
          zIndex: 1,
        },
        {
          transform: [
            {
              translateX: tooltipX,
            },
          ],
        },
      ]}>
      <Text fontSize={'xs'} color={'white'}>
        {item && formatCurrency(item.value)}
        {' | '}
        {item && item.date.format('HH:MM A, DD MMM')}
      </Text>
    </Animated.View>
  );
};
const Marker = ({
  y,
  positionX,
  items,
}: {
  y?: any;
  positionX: Animated.Value;
  items: RangedData[];
}) => {
  const positionY = useRef(new Animated.Value(0)).current;
  const size = items.length;
  useEffect(() => {
    const id = positionX.addListener(state => {
      let xLocation = state.value;
      const xDistance = width / size;
      if (xLocation <= 0) {
        xLocation = 0;
      }
      if (xLocation >= width) {
        xLocation = width;
      }

      let value = Number((xLocation / xDistance).toFixed(0));
      if (value >= size - 1) {
        value = size - 1;
      }
      positionY.setValue(y(items[value].value));
    });

    return () => {
      positionX.removeListener(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#fff',
          height: chartHeight,
          alignItems: 'center',
          width: 1,
        },
        {
          transform: [
            {
              translateX: positionX,
            },
          ],
        },
      ]}>
      <Animated.View
        style={[
          {
            backgroundColor: 'red',
            borderRadius: 10,
            height: 10,
            width: 10,
          },
          {
            transform: [
              {
                translateY: positionY,
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
};

const Graph = () => {
  const positionX = useRef(new Animated.Value(0)).current;

  return (
    <GestureHandlerRootView>
      <PanGestureHandler
        onGestureEvent={Animated.event([{nativeEvent: {x: positionX}}], {
          useNativeDriver: true,
        })}>
        <Animated.View
          style={{
            alignItems: 'stretch',
            height: chartHeight,
          }}>
          <LineChart
            style={{flex: 1}}
            data={data}
            yMin={550}
            yMax={650}
            yAccessor={({item}) => item.value}>
            <CustomLine />
            <Tooltip positionX={positionX} items={data} />
            <Marker positionX={positionX} items={data} />
          </LineChart>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Graph;
