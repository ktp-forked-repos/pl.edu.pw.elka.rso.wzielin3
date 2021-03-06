package pl.edu.pw.elka.rso.eres3.domain.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import pl.edu.pw.elka.rso.eres3.domain.entities.abstractions.SimpleIdEntity;

/**
 * An organizational unit, which is a root institution to which permissions can
 * be assigned for people. In this system it simply identifies a faculty.
 */
@Entity
@Table(uniqueConstraints=@UniqueConstraint(columnNames={"short_name"}))
public class OrganizationalUnit implements Serializable, SimpleIdEntity<Short> {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Short id;

	@NotNull
	@Size(min = 1, max = 200)
	@Column(length = 200, nullable = false)
	private String fullName;

	@NotNull
	@Size(min = 1, max = 20)
	@Column(length = 20, nullable = false, name="short_name")
	private String shortName;

	@Override
	public Short getId() {
		return id;
	}

	public void setId(final Short id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(final String fullName) {
		this.fullName = fullName;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(final String shortName) {
		this.shortName = shortName;
	}
	
	@Override
	public boolean equals(final Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		final OrganizationalUnit that = (OrganizationalUnit) o;
		return Objects.equals(shortName, that.shortName) &&
				Objects.equals(fullName, that.fullName);
	}

	@Override
	public int hashCode() {
		return Objects.hash(shortName, fullName);
	}
}