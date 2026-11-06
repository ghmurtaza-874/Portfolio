import { useState } from 'react';
import type { ChangeEvent, CSSProperties, FocusEvent, FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Github,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
} from 'lucide-react';
import { profile } from '../data/profile';
import '../styles/Contact.css';

/* ── Types & validation ──────────────────────────────────── */

type ContactField = 'name' | 'email' | 'subject' | 'message';
type FormValues = Record<ContactField, string>;
type FormErrors = Partial<Record<ContactField, string>>;
type FormStatus = 'idle' | 'valid';

const MAX_MESSAGE = 600;

const initialValues: FormValues = { name: '', email: '', subject: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(field: ContactField, value: string): string | undefined {
  const v = value.trim();
  switch (field) {
    case 'name':
      if (!v) return 'Please tell me your name.';
      if (v.length < 2) return 'Name needs at least 2 characters.';
      return undefined;
    case 'email':
      if (!v) return 'An email address is required.';
      if (!EMAIL_RE.test(v)) return 'That email address doesn’t look valid.';
      return undefined;
    case 'subject':
      if (!v) return 'A short subject helps me reply faster.';
      if (v.length < 3) return 'Subject needs at least 3 characters.';
      return undefined;
    case 'message':
      if (!v) return 'Please write a short message.';
      if (v.length < 20) return 'Message needs at least 20 characters so it’s worth reading.';
      return undefined;
  }
}

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as ContactField[]).forEach((field) => {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  });
  return errors;
}

function buildMailto(values: FormValues): string {
  const subject = `Portfolio contact — ${values.subject.trim()}`;
  const body = [
    `Hi ${profile.firstName},`,
    '',
    values.message.trim(),
    '',
    '—',
    values.name.trim(),
    values.email.trim(),
  ].join('\n');
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/* ── Component ───────────────────────────────────────────── */

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as ContactField;
    const next = { ...values, [field]: e.target.value };
    setValues(next);

    // Live feedback: clear (or re-check) the error for this field as the user types
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const error = validateField(field, next[field]);
      const updated = { ...prev };
      if (error) updated[field] = error;
      else delete updated[field];
      return updated;
    });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.name as ContactField;
    const error = validateField(field, values[field]);
    setErrors((prev) => {
      const updated = { ...prev };
      if (error) updated[field] = error;
      else delete updated[field];
      return updated;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const all = validateAll(values);
    setErrors(all);
    if (Object.keys(all).length === 0) {
      setStatus('valid');
    }
  };

  const backToForm = () => setStatus('idle');

  const mailtoHref =
    status === 'valid' ? buildMailto(values) : `mailto:${profile.email}`;

  const fieldClass = (field: ContactField) =>
    `form-input${errors[field] ? ' has-error' : ''}`;

  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="orb orb-purple contact-orb-1" aria-hidden="true" />
      <div className="orb orb-blue contact-orb-2" aria-hidden="true" />

      <div className="container-xxl position-relative">
        <div className="row g-5">
          {/* ── Info column ──────────────────────────── */}
          <div className="col-lg-5">
            <div className="section-head mb-4">
              <span className="eyebrow reveal">Contact</span>
              <h2 className="section-title reveal" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
                Let&apos;s build something{' '}
                <span className="gradient-text">great together</span>
              </h2>
              <p className="section-sub reveal" style={{ '--reveal-delay': '160ms' } as CSSProperties}>
                Have an idea, a junior-friendly opportunity, or just want to talk
                shop about React and TypeScript? My inbox is always open.
              </p>
            </div>

            <ul className="contact-info list-unstyled reveal" style={{ '--reveal-delay': '220ms' } as CSSProperties}>
              <li className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <Mail size={17} />
                </span>
                <div>
                  <span className="contact-info-label">Email</span>
                  <a className="contact-info-value" href={mailtoHref}>
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <MapPin size={17} />
                </span>
                <div>
                  <span className="contact-info-label">Location</span>
                  <span className="contact-info-value">{profile.location}</span>
                </div>
              </li>
              <li className="contact-info-item">
                <span className="contact-info-icon" aria-hidden="true">
                  <Clock size={17} />
                </span>
                <div>
                  <span className="contact-info-label">Availability</span>
                  <span className="contact-info-value">{profile.availability}</span>
                </div>
              </li>
            </ul>

            <div className="contact-socials reveal" style={{ '--reveal-delay': '280ms' } as CSSProperties}>
              <a className="icon-btn" href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Github size={18} />
              </a>
              <a className="icon-btn" href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={18} />
              </a>
              <a className="icon-btn" href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X profile">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* ── Form column ──────────────────────────── */}
          <div className="col-lg-7">
            <div
              className="contact-card glass-card reveal"
              style={{ '--reveal-delay': '180ms' } as CSSProperties}
            >
              {status === 'idle' ? (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label-c" htmlFor="contact-name">
                        Your name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        className={fieldClass('name')}
                        placeholder="Jane Doe"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="name"
                        aria-invalid={errors.name ? 'true' : undefined}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      />
                      {errors.name && (
                        <p className="field-error" id="contact-name-error" role="alert">
                          <AlertCircle size={13} aria-hidden="true" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="col-md-6">
                      <label className="form-label-c" htmlFor="contact-email">
                        Email address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        className={fieldClass('email')}
                        placeholder="jane@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        aria-invalid={errors.email ? 'true' : undefined}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      />
                      {errors.email && (
                        <p className="field-error" id="contact-email-error" role="alert">
                          <AlertCircle size={13} aria-hidden="true" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label-c" htmlFor="contact-subject">
                        Subject <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        className={fieldClass('subject')}
                        placeholder="Let's collaborate on…"
                        value={values.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={errors.subject ? 'true' : undefined}
                        aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      />
                      {errors.subject && (
                        <p className="field-error" id="contact-subject-error" role="alert">
                          <AlertCircle size={13} aria-hidden="true" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="col-12">
                      <label className="form-label-c" htmlFor="contact-message">
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        maxLength={MAX_MESSAGE}
                        className={fieldClass('message')}
                        placeholder="Tell me about your project, role or idea (min. 20 characters)…"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={errors.message ? 'true' : undefined}
                        aria-describedby="contact-message-hint contact-message-error"
                      />
                      <div className="message-meta">
                        {errors.message ? (
                          <p className="field-error mb-0" id="contact-message-error" role="alert">
                            <AlertCircle size={13} aria-hidden="true" />
                            {errors.message}
                          </p>
                        ) : (
                          <span className="field-hint" id="contact-message-hint">
                            Honest &amp; specific beats long &amp; vague.
                          </span>
                        )}
                        <span className="char-count mono">
                          {values.message.length}/{MAX_MESSAGE}
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn-glow w-100 justify-content-center">
                        Validate &amp; preview message
                        <Send size={16} aria-hidden="true" />
                      </button>

                      <p className="demo-note">
                        <Info size={13} aria-hidden="true" />
                        This portfolio is 100% frontend — the form validates locally and
                        never sends data to a server. After validation you&apos;ll get a
                        one-click email draft instead.
                      </p>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="form-success" role="status" aria-live="polite">
                  <span className="success-icon" aria-hidden="true">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="success-title">
                    Everything checks out
                    {values.name.trim() ? `, ${values.name.trim().split(/\s+/)[0]}` : ''}!
                  </h3>
                  <p className="success-text">
                    Your message passed validation — and since this site has no
                    backend, nothing was sent anywhere. Use the button below to open
                    the draft in your own email app, or edit the message some more.
                  </p>

                  <div className="success-preview glass-card">
                    <span className="mono success-preview-label">preview</span>
                    <p className="success-preview-subject mono">{values.subject.trim()}</p>
                    <p className="success-preview-body">{values.message.trim()}</p>
                    <p className="success-preview-from mono">
                      — {values.name.trim()} · {values.email.trim()}
                    </p>
                  </div>

                  <div className="success-actions">
                    <a className="btn-glow" href={mailtoHref}>
                      <Mail size={16} aria-hidden="true" />
                      Open email draft
                    </a>
                    <button type="button" className="btn-ghost" onClick={backToForm}>
                      Edit message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
