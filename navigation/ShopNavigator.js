import React from "react";
import { Platform, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import CustomHeaderButton from "../components/UI/HeaderButton";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={StackScreen}
          options={{
            headerShown: false,
            drawerIcon: (drawerConfig) => (
              <Ionicons name="cart" size={23} color={drawerConfig.tintColor} />
            ),
            drawerLabel: "Products",
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            drawerIcon: (drawerConfig) => (
              <Ionicons name="list" size={23} color={drawerConfig.tintColor} />
            ),
            drawerLabel: "Orders",
            title: "Your Orders",
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
            },
            headerBackTitleStyle: {
              fontFamily: "open-sans",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
          }}
        />
        <Drawer.Screen
          name="Admin"
          component={AdminScreen}
          options={{
            drawerIcon: (drawerConfig) => (
              <Ionicons
                name="create"
                size={23}
                color={drawerConfig.tintColor}
              />
            ),
            drawerLabel: "Admin",
            title: "Your Products",
            headerStyle: {
              backgroundColor: Platform.OS === "android" ? Colors.primary : "",
            },
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
            },
            headerBackTitleStyle: {
              fontFamily: "open-sans",
            },
            headerTintColor:
              Platform.OS === "android" ? "white" : Colors.primary,
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          title: "All Products",
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerBackTitleStyle: {
            fontFamily: "open-sans",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                // title="Cart"
                iconName="cart-outline"
                onPress={() => {
                  navigation.navigate("CartScreen");
                }}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                // title="Cart"
                iconName="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle,
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const AdminScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminPage"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          title: "Your Product",
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu bar"
                iconName="menu"
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Add"
                iconName="pencil"
                onPress={() => {
                  navigation.navigate("EditProduct");
                }}
              />
            </HeaderButtons>
          ),
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={({ navigation, route }) => ({
          title: !route.params?.productTitle
            ? "Add Product"
            : route.params?.productTitle,
          headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : "",
          },
          headerTitleStyle: {
            fontFamily: "open-sans-bold",
          },
          headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                // title="Cart"
                iconName="arrow-back"
                onPress={() => {
                  navigation.navigate("AdminPage");
                }}
              />
            </HeaderButtons>
          ),
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ShopNavigator;
