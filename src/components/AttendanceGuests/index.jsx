import { useState } from "react";
import { useTranslation } from "react-i18next"; // Ենթադրում եմ սա ես օգտագործում
import {
  Wrapper,
  Header,
  MessageBox,
  MessageIcon,
  MessageContent,
  Form,
  FormGroup,
  Label,
  Input,
  GuestCountContainer,
  GuestCountInput,
  TextArea,
  SubmitButton,
  SpinnerIcon,
  FooterText,
  RadioGroup,
  RadioOption,
  CustomRadio,
} from "./styled";

const AttendanceGuests = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    familySide: null,
    attending: null,
    guestCount: null,
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Օպցիաները վերցնում ենք JSON-ի options օբյեկտից
  const attendanceOptions = [
    { id: "full", label: t("options.full") },
    { id: "church_restaurant", label: t("options.church_restaurant") },
    { id: "restaurant_only", label: t("options.restaurant_only") },
    { id: "not_attending", label: t("options.not_attending") },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "guestCount" ? (value === "" ? null : parseInt(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    // Ստուգումներ թարգմանված հաղորդագրություններով
    if (!formData.fullName.trim()) {
      setMessage({ type: "error", text: t("placeholderName") });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycby03pgZj0xDqOZ9tOhpu92Teqq2Alkcd3TlBWxHtSdwcDM74uHkMmmAUzuWFDQ1j0mx/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            fullName: formData.fullName,
            familySide: formData.familySide,
            attending: formData.attending,
            guestCount:
              formData.attending !== "not_attending"
                ? formData.guestCount || 0
                : 0,
            comment: formData.comment || "",
          }).toString(),
        },
      );

      setMessage({ type: "success", text: t("success") });
      setFormData({
        fullName: "",
        familySide: null,
        attending: null,
        guestCount: null,
        comment: "",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setMessage({ type: "error", text: t("error") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <Header>
        <h3>{t("title")}</h3>
        <p>{t("subtitle")}</p>
      </Header>

      {message.text && (
        <MessageBox type={message.type}>
          <MessageIcon type={message.type}>
            {message.type === "success" ? "✓" : "⚠"}
          </MessageIcon>
          <MessageContent>
            <p>{message.text}</p>
          </MessageContent>
        </MessageBox>
      )}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">
            <h4>{t("fullName")}</h4>
          </Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder={t("placeholderName")}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <h4>{t("familySide")}</h4>
          </Label>
          <RadioGroup>
            {[
              { value: "Հարս", label: t("bride") },
              { value: "Փեսա", label: t("groom") },
            ].map((option) => (
              <RadioOption key={option.value}>
                <input
                  type="radio"
                  checked={formData.familySide === option.value}
                  onChange={() =>
                    setFormData({ ...formData, familySide: option.value })
                  }
                  style={{ display: "none" }}
                />
                <CustomRadio selected={formData.familySide === option.value} />
                <span>{option.label}</span>
              </RadioOption>
            ))}
          </RadioGroup>
        </FormGroup>

        <FormGroup>
          <Label>
            <h4>{t("attendingTitle")}</h4>
          </Label>
          <RadioGroup>
            {attendanceOptions.map((option) => (
              <RadioOption key={option.id}>
                <input
                  type="radio"
                  checked={formData.attending === option.id}
                  onChange={() =>
                    setFormData({ ...formData, attending: option.id })
                  }
                  style={{ display: "none" }}
                />
                <CustomRadio selected={formData.attending === option.id} />
                <span>{option.label}</span>
              </RadioOption>
            ))}
          </RadioGroup>
        </FormGroup>

        <GuestCountContainer>
          <Label htmlFor="guestCount">
            <h4>{t("guestCount")}</h4>
          </Label>
          <div>
            <GuestCountInput
              type="number"
              id="guestCount"
              name="guestCount"
              value={formData.guestCount}
              onChange={handleInputChange}
              max="20"
            />
          </div>
        </GuestCountContainer>

        <FormGroup>
          <Label htmlFor="comment">
            <h4>{t("comment")}</h4>
          </Label>
          <TextArea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            placeholder={t("placeholderComment")}
            rows="3"
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <SpinnerIcon />
              <span>{t("submitting")}</span>
            </>
          ) : (
            <span>{t("submit")}</span>
          )}
        </SubmitButton>

        <FooterText>{t("footer")}</FooterText>
      </Form>
    </Wrapper>
  );
};

export default AttendanceGuests;
