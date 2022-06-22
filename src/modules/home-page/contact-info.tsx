import React, { useState, useRef, useCallback, useEffect, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserIcon from 'assets/images/contact-info/user.svg';
import EmailIcon from 'assets/images/contact-info/email.svg';
import PhoneCallIcon from 'assets/images/contact-info/phonecall.svg';
import PencilIcon from 'assets/images/contact-info/pencil.svg';
import Input from 'components/input';
import TextArea from 'components/text-area';
import Button from 'components/button';
// import { appendSpreadsheet } from 'api/google-sheet/submit';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ERRORS } from 'utils/constant';
import classNames from 'classnames/bind';
import styles from './contact-info.module.scss';
const cx = classNames.bind(styles);

interface InitValues {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Review = () => {
  const { handleSubmit, touched, errors, setFieldValue, handleChange, values, setFieldTouched } = useFormik({
    validateOnChange: false,
    initialValues: { name: '', email: '', phone: '', message: '' } as InitValues,
    onSubmit: async (values) => {
      //TODO: submit form and write google sheet
      // appendSpreadsheet(values);
    },
    validationSchema: () => {
      return Yup.object().shape({
        name: Yup.string().max(1000, ERRORS.E3('Name', 1000)),
        email: Yup.string().max(1000, ERRORS.E3('Email', 1000)),
        phone: Yup.string().max(1000, ERRORS.E3('Phone', 1000)),
        message: Yup.string().max(1000, ERRORS.E3('Message', 1000)),
      });
    },
  });

  const scrollToError = () => {
    const validErrors = Object.keys(errors);
    if (validErrors.length > 0) {
      const element = document.getElementById(validErrors[0]);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  };

  return (
    <section className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('section-header')}>
          <h2 className={cx('header-title')}>Contact Info</h2>
          <h2>Get in touch</h2>
          <h2>
            Subscribe for the latest GoDatingFi updates and new version release for dating apps on the Web3, SocialFi,
            Polygon
          </h2>
        </div>
        <article className={cx('form-contact')}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={cx('input-info')}>
              <Input name="name" placeholder="Your name" onChange={handleChange} preIcon={<UserIcon />} />
              <Input name="email" placeholder="Your email" onChange={handleChange} preIcon={<EmailIcon />} />
              <Input name="phone" placeholder="Your phone" onChange={handleChange} preIcon={<PhoneCallIcon />} />
            </div>
            <TextArea
              name="message"
              placeholder="Enter message"
              onChange={handleChange}
              maxLength={1000}
              preIcon={<PencilIcon />}
            />

            <div className={cx('group-btn')}>
              <Button className={cx('btn-contact-info')} type="submit" onClick={scrollToError}>
                Send message
              </Button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Review;
