import { Meta } from '@storybook/react';
import React, { FC } from 'react';
import { Label } from '.';
import { useInput } from '../../hooks/useInput';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Input } from '../Input';

export default {
    title: 'Core/Label',
    component: Label,
} as Meta;

export const Main: FC = (args) => {
    const [email, setEmail] = useInput('');
    const [agree, setAgree] = useToggle(false);

    return (
        <Flex center className="h-screen">
            <div className="space-y-5 max-w-xs">
                <div className="text-3xl font-bold text-gray-700">Sign up for free</div>
                <div>
                    Get started with <strong>1,000 free sessions.</strong> No credit card required.
                </div>
                <div>
                    <Label>Email Address</Label>
                    <Input
                        placeholder="nick@session.link"
                        value={email}
                        onChange={setEmail}
                        className="w-full"
                    />
                </div>
                <div>
                    <Checkbox
                        checked={agree}
                        onChange={() => setAgree()}
                        className="text-sm"
                        labelClassName="ml-3"
                    >
                        <span className="text-justify break-words">
                            I agree to <strong>Terms of Service</strong>, <strong>Privacy Policy</strong>, and{' '}
                            <strong>API &amp; SDK License Agreement</strong>.
                        </span>
                    </Checkbox>
                </div>
                <div>
                    <Button label="Start free trial" className="ml-auto w-full" />
                </div>
                <div className="w-full h-0 border-b border-gray-300" />
                <Flex between>
                    <div className="text-gray-400">Have an account?</div>
                    <Flex center className="font-semibold text-indigo-700 cursor-pointer hover:underline">
                        <span>Login</span>
                        <span>
                            <Icon icon="chevron-right" />
                        </span>
                    </Flex>
                </Flex>
            </div>
        </Flex>
    );
};
