import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://bzobfdzgnocqnxnueiqj.supabase.co', 'sb_publishable_wbbeihO7XsH36IxZKdF7OQ_PITzrTlh', { auth: { persistSession: false } });
const INSTALL_ID = 'silaibook-installation-id';
const ACTIVATED = 'silaibook-activated';
async function installationId() { let id=await AsyncStorage.getItem(INSTALL_ID); if(!id){id=`sb-${Date.now()}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;await AsyncStorage.setItem(INSTALL_ID,id)} return id; }
export async function localActivation() { return (await AsyncStorage.getItem(ACTIVATED)) === 'true'; }
export async function activate(code, shopName, mobile) { const {data,error}=await supabase.rpc('activate_silaibook_code',{p_code:code.trim().toUpperCase(),p_device_id:await installationId(),p_shop_name:shopName,p_mobile:mobile}); if(error)throw new Error('Activation service unavailable. Check internet and try again.');if(!data?.success)throw new Error(data?.message||'Invalid activation code.');await AsyncStorage.setItem(ACTIVATED,'true');return data; }
