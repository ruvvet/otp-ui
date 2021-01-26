import {
  DialogContent,
  DialogContentText,
  Link,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';


export default function Disclaimer() {
  const [tos, setTos] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  return (
    <DialogContent className="disclaimer">
      <DialogContentText id="alert-dialog-description">
        <Typography variant="body2">
          Please read the{' '}
          <Link
            onClick={() => {
              setTos(true);
              setPrivacy(false);
            }}
          >
            terms of service
          </Link>{' '}
          and our{' '}
          <Link
            onClick={() => {
              setPrivacy(true);
              setTos(false);
            }}
          >
            {' '}
            privacy policy
          </Link>{' '}
          carefully before using the OTP web-app operated by ruvvet.com.
        </Typography>
        <Typography variant="h6">Conditions of use </Typography>
        <Typography variant="body2">
          By accessing the website at https://otp-siege.herokuapp.com/, you are
          agreeing to be bound by these terms of service, all applicable laws
          and regulations, and agree that you are responsible for compliance
          with any applicable local laws. If you do not agree with any of these
          terms, you are prohibited from using or accessing this site. The
          materials contained in this website are protected by applicable
          copyright and trademark law.
        </Typography>

        {tos && (
          <>
            <Typography variant="h6">OTPTerms of Service </Typography>
            <Typography variant="subtitle1">1. Terms</Typography>
            <Typography variant="body2">
              By accessing the website at https://otp-siege.herokuapp.com/, you
              are agreeing to be bound by these terms of service, all applicable
              laws and regulations, and agree that you are responsible for
              compliance with any applicable local laws. If you do not agree
              with any of these terms, you are prohibited from using or
              accessing this site. The materials contained in this website are
              protected by applicable copyright and trademark law.
            </Typography>

            <Typography variant="subtitle1">2. Use License</Typography>
            <Typography variant="body2">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Ruvvet's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not: modify or copy the materials; use the
              materials for any commercial purpose, or for any public display
              (commercial or non-commercial); attempt to decompile or reverse
              engineer any software contained on Ruvvet's website; remove any
              copyright or other proprietary notations from the materials; or
              transfer the materials to another person or "mirror" the materials
              on any other server. This license shall automatically terminate if
              you violate any of these restrictions and may be terminated by
              Ruvvet at any time. Upon terminating your viewing of these
              materials or upon the termination of this license, you must
              destroy any downloaded materials in your possession whether in
              electronic or printed format.
            </Typography>
            <Typography variant="subtitle1">3. Disclaimer</Typography>
            <Typography variant="body2">
              The materials on Ruvvet's website are provided on an 'as is'
              basis. Ruvvet makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights. Further, Ruvvet does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </Typography>
            <Typography variant="subtitle1">4. Limitations</Typography>
            <Typography variant="body2">
              In no event shall Ruvvet or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Ruvvet's website, even if
              Ruvvet or a Ruvvet authorized representative has been notified
              orally or in writing of the possibility of such damage. Because
              some jurisdictions do not allow limitations on implied warranties,
              or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </Typography>
            <Typography variant="subtitle1">
              5. Accuracy of materials
            </Typography>
            <Typography variant="body2">
              The materials appearing on Ruvvet's website could include
              technical, typographical, or photographic errors. Ruvvet does not
              warrant that any of the materials on its website are accurate,
              complete or current. Ruvvet may make changes to the materials
              contained on its website at any time without notice. However
              Ruvvet does not make any commitment to update the materials.
            </Typography>
            <Typography variant="subtitle1">6. Links</Typography>
            <Typography variant="body2">
              Ruvvet has not reviewed all of the sites linked to its website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Ruvvet of the
              site. Use of any such linked website is at the user's own risk.
            </Typography>
            <Typography variant="subtitle1">7. Modifications</Typography>
            <Typography variant="body2">
              Ruvvet may revise these terms of service for its website at any
              time without notice. By using this website you are agreeing to be
              bound by the then current version of these terms of service.
            </Typography>
            <Typography variant="subtitle1">8. Governing Law</Typography>
            <Typography variant="body2">
              These terms and conditions are governed by and construed in
              accordance with the laws of the United States and you irrevocably
              submit to the exclusive jurisdiction of the courts in that
              location.
            </Typography>
          </>
        )}

        {privacy && (
          <>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              Your privacy is important to us. It is OTP's policy to respect
              your privacy regarding any information we may collect from you
              across our website, https://otp-siege.herokuapp.com/, and other
              sites we own and operate.{' '}
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              We only ask for personal information when we truly need it to
              provide a service to you. We collect it by fair and lawful means,
              with your knowledge and consent. We also let you know why we’re
              collecting it and how it will be used.
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              {' '}
              We only retain collected information for as long as necessary to
              provide you with your requested service. What data we store, we’ll
              protect within commercially acceptable means to prevent loss and
              theft, as well as unauthorized access, disclosure, copying, use or
              modification.{' '}
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              We don’t share any personally identifying information publicly or
              with third-parties, except when required to by law.{' '}
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              Our website may link to external sites that are not operated by
              us. Please be aware that we have no control over the content and
              practices of these sites, and cannot accept responsibility or
              liability for their respective privacy policies.
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services.
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              {' '}
              Your continued use of our website will be regarded as acceptance
              of our practices around privacy and personal information. If you
              have any questions about how we handle user data and personal
              information, feel free to contact us.{' '}
            </Typography>
            <Typography variant="body2" style={{margin: "5px 0"}}>
              This policy is effective as of 25 January 2021.
            </Typography>
          </>
        )}
      </DialogContentText>
    </DialogContent>
  );
}
